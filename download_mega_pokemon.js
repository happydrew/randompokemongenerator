import https from 'https';
import http from 'http';
import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 缺失的 Pokemon 列表
const missingPokemon = [
  { id: 10278, name: 'clefable-mega', baseName: 'Clefable', variant: 'Mega' },
  { id: 10279, name: 'victreebel-mega', baseName: 'Victreebel', variant: 'Mega' },
  { id: 10280, name: 'starmie-mega', baseName: 'Starmie', variant: 'Mega' },
  { id: 10281, name: 'dragonite-mega', baseName: 'Dragonite', variant: 'Mega' },
  { id: 10282, name: 'meganium-mega', baseName: 'Meganium', variant: 'Mega' },
  { id: 10283, name: 'feraligatr-mega', baseName: 'Feraligatr', variant: 'Mega' },
  { id: 10284, name: 'skarmory-mega', baseName: 'Skarmory', variant: 'Mega' },
  { id: 10285, name: 'froslass-mega', baseName: 'Froslass', variant: 'Mega' },
  { id: 10286, name: 'emboar-mega', baseName: 'Emboar', variant: 'Mega' },
  { id: 10287, name: 'excadrill-mega', baseName: 'Excadrill', variant: 'Mega' },
  { id: 10288, name: 'scolipede-mega', baseName: 'Scolipede', variant: 'Mega' },
  { id: 10289, name: 'scrafty-mega', baseName: 'Scrafty', variant: 'Mega' },
  { id: 10290, name: 'eelektross-mega', baseName: 'Eelektross', variant: 'Mega' },
  { id: 10291, name: 'chandelure-mega', baseName: 'Chandelure', variant: 'Mega' },
  { id: 10292, name: 'chesnaught-mega', baseName: 'Chesnaught', variant: 'Mega' },
  { id: 10293, name: 'delphox-mega', baseName: 'Delphox', variant: 'Mega' },
  { id: 10294, name: 'greninja-mega', baseName: 'Greninja', variant: 'Mega' },
  { id: 10295, name: 'pyroar-mega', baseName: 'Pyroar', variant: 'Mega' },
  { id: 10296, name: 'floette-mega', baseName: 'Floette', variant: 'Mega' },
  { id: 10297, name: 'malamar-mega', baseName: 'Malamar', variant: 'Mega' },
  { id: 10298, name: 'barbaracle-mega', baseName: 'Barbaracle', variant: 'Mega' },
  { id: 10299, name: 'dragalge-mega', baseName: 'Dragalge', variant: 'Mega' },
  { id: 10300, name: 'hawlucha-mega', baseName: 'Hawlucha', variant: 'Mega' },
  { id: 10301, name: 'zygarde-mega', baseName: 'Zygarde', variant: 'Mega' },
  { id: 10302, name: 'drampa-mega', baseName: 'Drampa', variant: 'Mega' },
  { id: 10303, name: 'falinks-mega', baseName: 'Falinks', variant: 'Mega' },
  { id: 10304, name: 'raichu-mega-x', baseName: 'Raichu', variant: 'Mega X' },
  { id: 10305, name: 'raichu-mega-y', baseName: 'Raichu', variant: 'Mega Y' },
];

// 输出目录
const outputDir = path.join(__dirname, 'public', 'img', 'sprites', 'master', 'sprites', 'pokemon');

// 确保输出目录存在
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// 下载图片
function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;

    protocol.get(url, (response) => {
      if (response.statusCode === 302 || response.statusCode === 301) {
        // 处理重定向
        downloadImage(response.headers.location, filepath)
          .then(resolve)
          .catch(reject);
        return;
      }

      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download: ${response.statusCode}`));
        return;
      }

      const file = fs.createWriteStream(filepath);
      response.pipe(file);

      file.on('finish', () => {
        file.close();
        resolve();
      });

      file.on('error', (err) => {
        fs.unlink(filepath, () => {});
        reject(err);
      });
    }).on('error', reject);
  });
}

// 获取页面内容
function fetchPage(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 302 || response.statusCode === 301) {
        // 处理重定向
        fetchPage(response.headers.location)
          .then(resolve)
          .catch(reject);
        return;
      }

      let data = '';
      response.on('data', (chunk) => {
        data += chunk;
      });

      response.on('end', () => {
        resolve(data);
      });
    }).on('error', reject);
  });
}

// 从页面中提取 Mega 形态图片 URL
function extractMegaImageUrl(html, baseName, variant) {
  const dom = new JSDOM(html);
  const document = dom.window.document;

  // 查找所有图片
  const images = Array.from(document.querySelectorAll('img'));

  // 查找匹配的 Mega 形态图片
  let targetImage = null;

  for (const img of images) {
    const alt = img.getAttribute('alt') || '';
    const src = img.getAttribute('src') || '';

    // 检查 alt 文本是否匹配
    if (variant === 'Mega X' && alt.includes('Mega') && alt.includes('X')) {
      targetImage = src;
      break;
    } else if (variant === 'Mega Y' && alt.includes('Mega') && alt.includes('Y')) {
      targetImage = src;
      break;
    } else if (variant === 'Mega' && alt.includes('Mega') && !alt.includes('X') && !alt.includes('Y')) {
      // 确保是基础 Mega 形态，不是 X 或 Y
      if (alt.includes(baseName)) {
        targetImage = src;
        break;
      }
    }
  }

  if (!targetImage) {
    return null;
  }

  // 将缩略图 URL 转换为原图 URL
  // 例如: /media/upload/thumb/5/5a/0036Clefable-Mega.png/110px-0036Clefable-Mega.png
  // 转换为: /media/upload/5/5a/0036Clefable-Mega.png
  if (targetImage.includes('/thumb/')) {
    targetImage = targetImage.replace(/\/thumb\/(.+?)\/\d+px-.+$/, '/$1');
  }

  // 确保是完整的 URL
  if (targetImage.startsWith('/')) {
    targetImage = 'https://archives.bulbagarden.net' + targetImage;
  }

  return targetImage;
}

// 处理单个 Pokemon
async function processPokemon(pokemon) {
  try {
    console.log(`Processing ${pokemon.name} (ID: ${pokemon.id})...`);

    // 构建 bulbapedia URL
    const url = `https://bulbapedia.bulbagarden.net/wiki/${encodeURIComponent(pokemon.baseName)}_(Pok%C3%A9mon)`;
    console.log(`  Fetching page: ${url}`);

    // 获取页面内容
    const html = await fetchPage(url);

    // 提取图片 URL
    const imageUrl = extractMegaImageUrl(html, pokemon.baseName, pokemon.variant);

    if (!imageUrl) {
      console.log(`  ❌ No image found for ${pokemon.variant} ${pokemon.baseName}`);
      return { success: false, pokemon: pokemon.name, reason: 'Image not found' };
    }

    console.log(`  Found image: ${imageUrl}`);

    // 下载图片
    const filepath = path.join(outputDir, `${pokemon.id}.png`);
    await downloadImage(imageUrl, filepath);

    console.log(`  ✅ Downloaded to ${filepath}`);
    return { success: true, pokemon: pokemon.name };

  } catch (error) {
    console.log(`  ❌ Error: ${error.message}`);
    return { success: false, pokemon: pokemon.name, reason: error.message };
  }
}

// 主函数
async function main() {
  console.log('Starting to download Mega Pokemon images...\n');

  const results = [];

  // 逐个处理 Pokemon（避免并发过多导致被封 IP）
  for (const pokemon of missingPokemon) {
    const result = await processPokemon(pokemon);
    results.push(result);

    // 等待一小段时间，避免请求过快
    await new Promise(resolve => setTimeout(resolve, 1000));
  }

  // 输出结果统计
  console.log('\n=== Results ===');
  const successful = results.filter(r => r.success).length;
  const failed = results.filter(r => !r.success).length;

  console.log(`✅ Successful: ${successful}`);
  console.log(`❌ Failed: ${failed}`);

  if (failed > 0) {
    console.log('\nFailed Pokemon:');
    results.filter(r => !r.success).forEach(r => {
      console.log(`  - ${r.pokemon}: ${r.reason}`);
    });
  }
}

main().catch(console.error);
