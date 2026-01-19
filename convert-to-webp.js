#!/usr/bin/env node

import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 支持的图片格式
const SUPPORTED_FORMATS = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.tiff', '.tif'];

// 解析命令行参数
function parseArgs() {
  const args = process.argv.slice(2);

  const config = {
    directory: null,
    deleteOriginal: false,
    quality: 80,
    help: false
  };

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];

    if (arg === '--help' || arg === '-h') {
      config.help = true;
    } else if (arg === '--delete' || arg === '-d') {
      config.deleteOriginal = true;
    } else if (arg === '--quality' || arg === '-q') {
      config.quality = parseInt(args[++i], 10);
      if (isNaN(config.quality) || config.quality < 0 || config.quality > 100) {
        console.error('Error: Quality must be a number between 0 and 100');
        process.exit(1);
      }
    } else if (!arg.startsWith('-')) {
      config.directory = arg;
    }
  }

  return config;
}

// 显示帮助信息
function showHelp() {
  console.log(`
WebP Converter - Convert images to WebP format

Usage:
  node convert-to-webp.js [directory] [options]

Arguments:
  directory           Target directory (default: current directory)

Options:
  -d, --delete        Delete original images after conversion
  -q, --quality NUM   WebP quality (0-100, default: 80)
  -h, --help          Show this help message

Examples:
  node convert-to-webp.js ./images
  node convert-to-webp.js ./images --delete
  node convert-to-webp.js ./images --quality 90 --delete
`);
}

// 递归获取所有图片文件
async function getAllImageFiles(dir) {
  const files = [];

  try {
    const entries = await fs.readdir(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        const subFiles = await getAllImageFiles(fullPath);
        files.push(...subFiles);
      } else if (entry.isFile()) {
        const ext = path.extname(entry.name).toLowerCase();
        if (SUPPORTED_FORMATS.includes(ext)) {
          files.push(fullPath);
        }
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error.message);
  }

  return files;
}

// 转换单个图片
async function convertImage(imagePath, quality, deleteOriginal) {
  try {
    const ext = path.extname(imagePath);
    const webpPath = imagePath.replace(new RegExp(`${ext}$`), '.webp');

    // 检查 webp 文件是否已存在
    try {
      await fs.access(webpPath);
      console.log(`  ⏭️  Skipped (already exists): ${path.basename(webpPath)}`);
      return { success: true, skipped: true };
    } catch {
      // 文件不存在，继续转换
    }

    // 转换为 WebP
    await sharp(imagePath)
      .webp({ quality })
      .toFile(webpPath);

    // 获取文件大小信息
    const originalStats = await fs.stat(imagePath);
    const webpStats = await fs.stat(webpPath);
    const savedPercentage = ((originalStats.size - webpStats.size) / originalStats.size * 100).toFixed(1);

    console.log(`  ✅ Converted: ${path.basename(imagePath)} → ${path.basename(webpPath)} (${savedPercentage}% smaller)`);

    // 删除原始文件（如果指定）
    if (deleteOriginal) {
      await fs.unlink(imagePath);
      console.log(`  🗑️  Deleted: ${path.basename(imagePath)}`);
    }

    return { success: true, skipped: false, savedBytes: originalStats.size - webpStats.size };
  } catch (error) {
    console.error(`  ❌ Error converting ${imagePath}:`, error.message);
    return { success: false, error: error.message };
  }
}

// 主函数
async function main() {
  const config = parseArgs();

  if (config.help) {
    showHelp();
    process.exit(0);
  }

  // 设置目标目录
  const targetDir = config.directory
    ? path.resolve(config.directory)
    : process.cwd();

  console.log('\n🖼️  WebP Converter\n');
  console.log(`Directory: ${targetDir}`);
  console.log(`Quality: ${config.quality}`);
  console.log(`Delete originals: ${config.deleteOriginal ? 'Yes' : 'No'}\n`);

  // 检查目录是否存在
  try {
    const stats = await fs.stat(targetDir);
    if (!stats.isDirectory()) {
      console.error(`Error: ${targetDir} is not a directory`);
      process.exit(1);
    }
  } catch (error) {
    console.error(`Error: Directory ${targetDir} does not exist`);
    process.exit(1);
  }

  // 获取所有图片文件
  console.log('🔍 Scanning for images...\n');
  const imageFiles = await getAllImageFiles(targetDir);

  if (imageFiles.length === 0) {
    console.log('No images found.');
    process.exit(0);
  }

  console.log(`Found ${imageFiles.length} image(s)\n`);
  console.log('🔄 Converting...\n');

  // 转换所有图片
  const results = {
    successful: 0,
    skipped: 0,
    failed: 0,
    totalSaved: 0
  };

  for (const imagePath of imageFiles) {
    const result = await convertImage(imagePath, config.quality, config.deleteOriginal);

    if (result.success) {
      if (result.skipped) {
        results.skipped++;
      } else {
        results.successful++;
        results.totalSaved += result.savedBytes || 0;
      }
    } else {
      results.failed++;
    }
  }

  // 输出统计信息
  console.log('\n📊 Results:');
  console.log(`  ✅ Converted: ${results.successful}`);
  console.log(`  ⏭️  Skipped: ${results.skipped}`);
  console.log(`  ❌ Failed: ${results.failed}`);

  if (results.totalSaved > 0) {
    const savedMB = (results.totalSaved / 1024 / 1024).toFixed(2);
    console.log(`  💾 Total space saved: ${savedMB} MB`);
  }

  console.log();
}

main().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
