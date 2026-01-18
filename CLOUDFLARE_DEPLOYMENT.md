# Cloudflare Pages 部署指南

## 🚀 部署配置

### 在 Cloudflare Pages Dashboard 中设置

1. **登录 Cloudflare Dashboard**
   - 访问 https://dash.cloudflare.com/
   - 进入 `Pages` → `Create a project` → `Connect to Git`

2. **选择仓库**
   - 连接你的 GitHub/GitLab 账号
   - 选择 `randompokemongenerator` 仓库

3. **配置构建设置**

   | 设置项 | 值 |
   |--------|-----|
   | **Framework preset** | Next.js (Static HTML Export) |
   | **Build command** | `pnpm build` |
   | **Build output directory** | `out` |

4. **环境变量（Environment Variables）**

   添加以下环境变量：

   ```
   NODE_VERSION=20.18.1
   PNPM_VERSION=10.11.1
   ```

5. **点击 `Save and Deploy`**

---

## 📋 构建命令说明

项目使用以下构建流程：

```bash
# 安装依赖
pnpm install

# 构建静态网站（输出到 out/ 目录）
pnpm build  # 等同于 next build && next-image-export-optimizer
```

---

## 🔧 本地测试部署

在推送到 Cloudflare 之前，可以本地测试构建：

```bash
# 1. 安装依赖
pnpm install

# 2. 构建
pnpm build

# 3. 预览（使用 http-server 或其他静态服务器）
npx serve out
```

---

## ⚠️ 常见问题

### 1. Node.js 版本错误
**错误**: `EBADENGINE Unsupported engine`

**解决**: 确保 Cloudflare Pages 环境变量中设置了：
```
NODE_VERSION=20.18.1
```

### 2. pnpm lockfile 不匹配
**错误**: `ERR_PNPM_LOCKFILE_CONFIG_MISMATCH`

**解决**: 在本地运行后提交：
```bash
pnpm install --no-frozen-lockfile
git add pnpm-lock.yaml
git commit -m "chore: update pnpm lockfile"
git push
```

### 3. 构建超时
**解决**: 在 Cloudflare Pages 设置中增加构建超时时间（默认 20 分钟）

---

## 🌐 重定向配置

项目的重定向规则已在 `next.config.js` 中配置，静态导出会自动生成。

如需自定义重定向，可在 `public/` 目录下创建 `_redirects` 文件：

```
# 示例：
/old-path /new-path 301
/api/* https://api.example.com/:splat 200
```

---

## 🎯 部署后验证

部署成功后，访问 Cloudflare 提供的 URL（如 `https://randompokemongenerator.pages.dev`）验证：

- [ ] 首页正常显示
- [ ] 图片正常加载
- [ ] 路由跳转正常
- [ ] 重定向规则生效

---

## 📚 相关文档

- [Cloudflare Pages 官方文档](https://developers.cloudflare.com/pages/)
- [Next.js 静态导出](https://nextjs.org/docs/pages/building-your-application/deploying/static-exports)
- [pnpm 文档](https://pnpm.io/)
