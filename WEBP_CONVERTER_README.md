# WebP Converter

一个将图片批量转换为 WebP 格式的工具。

## 功能特性

- 递归扫描目录及所有子目录中的图片文件
- 支持多种图片格式：JPG, JPEG, PNG, GIF, BMP, TIFF
- 可自定义 WebP 质量（0-100）
- 可选择是否删除原始图片
- 自动跳过已存在的 WebP 文件
- 显示详细的转换统计信息（转换数量、节省空间等）

## 使用方法

### 方式 1：使用 npm 脚本（推荐）

```bash
# 转换当前目录（保留原图）
pnpm run webp

# 转换当前目录并删除原图
pnpm run webp:delete

# 转换指定目录
pnpm run webp ./images

# 自定义质量
pnpm run webp ./images -- --quality 90
```

### 方式 2：直接使用 Node.js 脚本

转换当前目录：
```bash
node convert-to-webp.js .
```

转换指定目录：
```bash
node convert-to-webp.js ./images
```

指定质量：
```bash
node convert-to-webp.js ./images --quality 90
```

转换并删除原图：
```bash
node convert-to-webp.js ./images --delete
```

### 方式 3：在 Claude Code 中使用

直接告诉 Claude 你的需求，例如：
```
请帮我转换 ./public/img/sprites 目录下的所有图片为 WebP 格式，质量 80，保留原图
```

Claude 会自动执行相应的命令。

## 选项说明

- `--delete` 或 `-d`: 转换后删除原始图片（会要求确认）
- `--quality NUM` 或 `-q NUM`: 设置 WebP 质量（0-100，默认 80）
- `--help` 或 `-h`: 显示帮助信息

## 示例输出

```
🖼️  WebP Converter

Directory: D:\projects\myapp\images
Quality: 80
Delete originals: No

🔍 Scanning for images...

Found 15 image(s)

🔄 Converting...

  ✅ Converted: photo1.jpg → photo1.webp (45.2% smaller)
  ✅ Converted: photo2.png → photo2.webp (62.1% smaller)
  ⏭️  Skipped (already exists): photo3.webp
  ...

📊 Results:
  ✅ Converted: 12
  ⏭️  Skipped: 1
  ❌ Failed: 0
  💾 Total space saved: 5.43 MB
```

## 安全提示

- 使用 `--delete` 选项时，Claude Code 会先请求确认
- 建议先在小范围测试转换效果
- 原始图片删除后无法恢复，请谨慎使用
- 已存在的 .webp 文件会被自动跳过

## 技术实现

- 使用 Node.js 和 sharp 库进行图片转换
- 递归扫描目录结构
- 支持 ES modules
- 完整的错误处理

## 依赖

- Node.js (已安装在项目中)
- sharp (已在 package.json 中配置)

## 文件说明

- `convert-to-webp.js` - 主转换脚本
- `.claude-plugin/marketplace.json` - Plugin 配置文件
- `.claude/settings.local.json` - 启用 plugin 的配置
