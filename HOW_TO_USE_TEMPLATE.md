# 游戏页面创建模板 - 使用指南

## 📚 文档说明

项目中已创建三个文档：

1. **GAME_PAGE_CREATION_PROMPT.md** - 完整详细的提示词模板（推荐首次阅读）
2. **QUICK_PROMPT_TEMPLATE.md** - 快速使用模板（日常使用）
3. **HOW_TO_USE_TEMPLATE.md** - 本文件，使用说明

---

## 🚀 快速开始（3步）

### 第1步：准备信息

收集你要创建页面的游戏的基本信息：

```
游戏名称: ___________________
核心关键词（3个）: ___________, ___________, ___________
相关关键词（5个）: ___________, ___________, ___________, ___________, ___________
官方链接: ___________________
下载链接: ___________________
```

**关键词选择技巧：**
- 使用Google搜索建议
- 查看Google Trends
- 分析竞争对手页面
- 关注"People also ask"部分

### 第2步：填写模板

打开 `QUICK_PROMPT_TEMPLATE.md`，复制全部内容，然后：

1. 找到文档底部的"变量填写区"
2. 填写所有变量
3. 复制整个填好的文档

**示例填写：**
```
{游戏名称} = Sprunki Incredibox
{核心关键词1} = sprunki incredibox
{核心关键词2} = sprunki game
{核心关键词3} = incredibox sprunki
{相关关键词1} = sprunki mod
{相关关键词2} = sprunki online
{相关关键词3} = play sprunki
{相关关键词4} = sprunki download
{相关关键词5} = sprunki free
{官方链接或主要参考链接} = https://sprunki.com
{其他参考链接1} = https://itch.io/games/sprunki
{其他参考链接2} = https://gamesite.com/sprunki
{直接下载链接} = https://sprunki.com/download
```

### 第3步：提供给AI

将填好的完整提示词提供给AI（如Claude），附上这句话：

```
请按照上述详细要求完成游戏页面的创建。
```

然后等待AI完成所有工作！

---

## 📋 AI会自动完成的任务

当你提供填好的提示词后，AI会自动：

### ✅ 阶段1：信息收集（5-10分钟）
- 搜索游戏相关信息
- 访问提供的参考链接
- 收集开发者、发布日期、特色等信息
- 搜索YouTube视频
- 查找游戏截图

### ✅ 阶段2：内容规划（5分钟）
- 根据SEO最佳实践规划内容结构
- 设计11个主要章节
- 规划关键词分布
- 设计视觉风格和配色

### ✅ 阶段3：创建文件（10-15分钟）
- 创建游戏组件（带氛围感设计）
- 创建页面文件（包含SEO元数据）
- 更新导航配置
- 添加图片和视频（或占位符）

### ✅ 阶段4：SEO优化（5分钟）
- 优化Title（≤60字符）
- 优化Description（≤160字符）
- 添加所有Meta标签
- 添加Schema.org结构化数据
- 优化关键词密度

**总时间：约30-45分钟**

---

## 📁 完成后会创建的文件

```
项目根目录/
├── src/
│   ├── components/
│   │   └── games/
│   │       └── {GameName}.tsx          ← 新建：游戏组件
│   └── pages/
│       └── games/
│           ├── {game-name}.tsx         ← 新建：页面文件
│           └── _meta.tsx               ← 更新：导航配置
```

**文件示例：**
- 组件：`src/components/games/SprunkiIncredibox.tsx`
- 页面：`src/pages/games/sprunki-incredibox.tsx`

---

## 🎨 页面将包含的内容

### 视觉设计
- ✅ 根据游戏主题的配色方案
- ✅ 大背景图（Hero section）
- ✅ 渐变效果和阴影
- ✅ 发光按钮和卡片
- ✅ 响应式布局
- ✅ 6+张游戏截图（或占位符）

### 内容章节（11个）
1. Hero Section - 首屏大标题
2. Introduction - 引言
3. What - 游戏介绍
4. Why - 为什么受欢迎
5. **Download - 下载章节（重点）**
6. How to Play - 玩法
7. Features - 游戏特色
8. YouTube - 视频内容
9. Tips - 游戏技巧
10. FAQ - 常见问题
11. Final CTA - 最终号召

### SEO优化
- ✅ 完整的Meta标签
- ✅ Open Graph社交分享
- ✅ Twitter Card
- ✅ Schema.org结构化数据
- ✅ Canonical URL
- ✅ 关键词密度优化

---

## 🔧 完成后你需要做什么

### 必做（1项）
1. **测试页面**
   ```bash
   npm run dev
   ```
   访问：`http://localhost:3000/games/{game-name}`

### 可选（4项）
1. **替换图片占位符**
   - AI会标注哪些是占位符
   - 搜索实际游戏截图替换

2. **添加YouTube视频**
   - AI会提供YouTube搜索链接
   - 找到具体视频，替换video ID

3. **优化内容**
   - 根据实际情况调整文字
   - 添加更多细节信息

4. **提交搜索引擎**
   - Google Search Console
   - Bing Webmaster Tools

---

## 💡 最佳实践建议

### 关键词选择
- ✅ **DO**: 选择有搜索量但竞争度适中的词
- ✅ **DO**: 使用长尾关键词（3-5个词）
- ❌ **DON'T**: 选择过于宽泛的词（如"game"）
- ❌ **DON'T**: 使用过于生僻的词（无人搜索）

### 内容创建
- ✅ **DO**: 提供真实有价值的信息
- ✅ **DO**: 自然融入关键词
- ❌ **DON'T**: 关键词堆砌
- ❌ **DON'T**: 复制其他网站内容

### 下载链接
- ✅ **DO**: 使用官方下载链接
- ✅ **DO**: 创建独立的下载章节
- ✅ **DO**: 提供清晰的下载步骤
- ❌ **DON'T**: 使用非官方/可疑链接

### 图片和视频
- ✅ **DO**: 使用CDN链接（如itch.io）
- ✅ **DO**: 优化图片大小
- ✅ **DO**: 添加alt文本
- ❌ **DON'T**: 上传超大图片

---

## 🐛 常见问题排查

### Q1: AI说找不到游戏信息怎么办？
**A**: 提供更多参考链接，或者直接提供游戏的基本信息（开发者、发布日期等）

### Q2: 页面访问404怎么办？
**A**: 检查：
1. `_meta.tsx`是否正确更新
2. 页面文件名是否使用kebab-case
3. 重启开发服务器

### Q3: 图片不显示怎么办？
**A**:
1. 检查图片URL是否正确
2. 如果是占位符，这是正常的，需要手动替换
3. 确保使用HTTPS链接

### Q4: 关键词密度太高/太低怎么办？
**A**: 告诉AI："请调整关键词密度，核心关键词保持4-6%，相关关键词保持1-3%"

### Q5: 想修改设计风格怎么办？
**A**: 在提示词中添加："使用{颜色}作为主色调，风格要更{形容词}"

---

## 📈 SEO检查清单

创建页面后，使用此清单检查：

### 基础SEO
- [ ] Title包含核心关键词
- [ ] Title长度 ≤ 60字符
- [ ] Description包含核心关键词
- [ ] Description长度 ≤ 160字符
- [ ] URL使用kebab-case
- [ ] 有Canonical URL

### 内容SEO
- [ ] H1标签有且仅有1个
- [ ] H2标签组织良好（11个章节）
- [ ] 下载章节是独立H2
- [ ] 关键词自然融入
- [ ] FAQ部分包含长尾关键词

### 技术SEO
- [ ] 所有图片有alt文本
- [ ] 外部链接使用target="_blank"
- [ ] 页面加载速度快
- [ ] 移动端友好
- [ ] 无404链接

### 高级SEO
- [ ] Open Graph标签完整
- [ ] Twitter Card标签完整
- [ ] Schema.org数据正确
- [ ] Breadcrumb导航清晰

---

## 🎯 成功案例参考

本项目已创建的页面：
- `/games/brother-hai-restaurant` - Brother Hai's Pho Restaurant

你可以参考这个页面的：
- 设计风格
- 内容结构
- SEO优化
- 视觉效果

---

## 📞 需要帮助？

如果遇到问题：

1. **查看完整文档**: `GAME_PAGE_CREATION_PROMPT.md`
2. **检查示例页面**: `/games/brother-hai-restaurant`
3. **调整提示词**: 在QUICK_PROMPT中添加更多具体要求
4. **增量修改**: 让AI逐步调整，而不是一次全部重做

---

## 🔄 版本记录

- **v1.0** (2024-11-05) - 初始版本，基于Brother Hai's Pho Restaurant项目总结

---

**祝你创建成功！** 🚀

记住：高质量的内容 + 合理的SEO = 好的搜索排名
