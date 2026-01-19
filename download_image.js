import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 从命令行参数获取图片 URL 和输出文件名
const imageUrl = process.argv[2];
const outputId = process.argv[3];

if (!imageUrl || !outputId) {
  console.error('Usage: node download_image.js <imageUrl> <outputId>');
  process.exit(1);
}

// 输出目录
const outputDir = path.join(__dirname, 'public', 'img', 'sprites', 'master', 'sprites', 'pokemon');

// 确保输出目录存在
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// 下载图片
function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Referer': 'https://bulbapedia.bulbagarden.net/'
      }
    };

    https.get(url, options, (response) => {
      if (response.statusCode === 302 || response.statusCode === 301) {
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
        console.log(`Downloaded: ${filepath}`);
        resolve();
      });

      file.on('error', (err) => {
        fs.unlink(filepath, () => {});
        reject(err);
      });
    }).on('error', reject);
  });
}

// 将缩略图 URL 转换为原图 URL
let fullImageUrl = imageUrl;
if (fullImageUrl.includes('/thumb/')) {
  fullImageUrl = fullImageUrl.replace(/\/thumb\/(.+?)\/\d+px-.+$/, '/$1');
}

// 确保是完整的 URL
if (fullImageUrl.startsWith('/')) {
  fullImageUrl = 'https://archives.bulbagarden.net' + fullImageUrl;
}

const filepath = path.join(outputDir, `${outputId}.png`);

downloadImage(fullImageUrl, filepath)
  .then(() => {
    console.log('Success');
    process.exit(0);
  })
  .catch((err) => {
    console.error('Error:', err.message);
    process.exit(1);
  });
