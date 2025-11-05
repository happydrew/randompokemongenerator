# 游戏页面创建提示词模板

## 任务概述
我需要在当前项目中创建一个关于「{游戏名称}」的专门页面，主要目的是通过SEO优化获取搜索流量。这个游戏是近期的热搜新词，我希望通过创建一个内容丰富、SEO优化的页面来满足搜索需求。

---

## 📋 任务要求清单

### 1. 信息收集与研究
- [ ] 广泛搜索「{核心关键词}」，了解游戏的所有相关信息
- [ ] 重点关注Google等搜索引擎排名靠前的结果
- [ ] 收集整理游戏的以下信息：
  - 游戏开发者/开发团队
  - 发布日期和平台
  - 游戏类型和特色
  - 玩法介绍
  - 系统要求
  - 社区反馈和评价
  - YouTube热门视频
  - 下载链接和方式

### 2. 关键词策略
根据以下关键词进行内容组织和SEO优化：

**核心关键词**（密度保持在4-6%）：
- {核心关键词1}
- {核心关键词2}
- {核心关键词3}

**相关关键词**（密度保持在1-3%）：
- {相关关键词1}
- {相关关键词2}
- {相关关键词3}
- {相关关键词4}
- {相关关键词5}

### 3. 参考资料链接
提供以下参考链接（如果有）：
- 官方发布页面：{官方链接}
- 相关资源页面：{资源链接1}, {资源链接2}
- YouTube搜索：搜索「{游戏名称} gameplay」相关视频

---

## 🎯 技术实现要求

### 文件结构要求

**1. 组件文件位置**
- 路径：`src/components/games/{GameName}.tsx`
- 命名：使用PascalCase，例如：`BrotherHaiRestaurant.tsx`

**2. 页面文件位置**
- 路径：`src/pages/games/{game-name}.tsx`
- 命名：使用kebab-case，例如：`brother-hai-restaurant.tsx`

**3. 导航配置**
- 文件：`src/pages/games/_meta.tsx`
- 添加新页面配置，使用raw布局

### 组件设计要求

**1. 使用React组件而非MDX**
- 在`src/components/games`目录下创建专门的组件
- 组件应该能营造游戏主题的氛围感
- 使用Tailwind CSS进行样式设计

**2. 设计风格要求**
- 根据游戏主题选择合适的配色方案
- 使用渐变背景增强视觉效果
- 可以使用图片作为背景
- 添加适当的阴影、发光等视觉效果
- 确保响应式设计（移动端和桌面端自适应）

**3. 视觉元素**
- 使用游戏官方图片（优先使用CDN链接）
- 如果找不到实际资源，使用占位符并标注需要替换
- 添加视频嵌入区域或YouTube链接
- 使用卡片、表格等组件提升可读性

---

## 📝 内容结构要求（SEO最佳实践）

### 页面内容结构（按顺序）：

#### 1. Hero Section（首屏）
- 大背景图（可使用fixed效果）
- 游戏标题（H1标签，包含核心关键词）
- 副标题/游戏原名
- 简短介绍（1-2句话）
- 主CTA按钮（下载/访问链接）

#### 2. Introduction（引言）
- 标题：「The Viral Sensation / 病毒式传播现象」或类似
- 介绍游戏的热度和受欢迎程度
- 提及发布日期、开发者
- 强调游戏的独特性

#### 3. What（游戏介绍）
- H2标题：「What is {游戏名称}?」
- 游戏概述
- Quick Facts表格（开发者、发布日期、平台、语言、时长等）
- 故事背景介绍
- 配图

#### 4. Why（为什么受欢迎）
- H2标题：「Why is {游戏名称} So Popular?」
- 3-4个特色点，使用卡片展示：
  - 文化/主题特色
  - 玩法创新
  - 社交媒体传播
  - 免费/易获取性
- 提及热门YouTuber评价

#### 5. Download（下载章节）⭐ 重点
- H2标题：「How to Download {游戏名称}」**（必须独立H2章节）**
- 警告提示框：只从官方下载
- 下载步骤（1、2、3、4步骤，带编号）
- 系统要求表格
- 配图（下载页面截图）
- **直接下载按钮**（使用提供的下载链接）
- 针对「download」关键词优化

#### 6. How to Play（玩法介绍）
- H2标题：「How to Play {游戏名称}」
- 游戏机制介绍（3-4个方面）
- 操作控制说明
- 配图/截图

#### 7. Game Features（游戏特色）
- H2标题：「Game Features & What Makes It Unique」
- 特色功能详解
- 如有多个结局/成就，使用卡片展示
- 配图

#### 8. YouTube/Videos（视频内容）
- H2标题：「Watch Gameplay on YouTube」
- 列出热门YouTuber
- 视频嵌入区域（如找不到具体视频ID，使用占位符）
- YouTube搜索链接
- 配图

#### 9. Tips & Tricks（游戏技巧）
- H2标题：「Tips & Tricks for Playing」
- 新手建议
- 高级玩家/成就猎人建议
- 使用列表形式

#### 10. FAQ（常见问题）
- H2标题：「Frequently Asked Questions」
- 6-8个常见问题：
  - 是否免费？
  - 在哪下载？
  - 语言支持？
  - 游戏时长？
  - 游戏类型/恐怖程度？
  - 支持的平台？
- 每个问题使用H3标签
- 答案包含关键词（自然融入）

#### 11. Final CTA（最终号召）
- 总结游戏亮点
- Key Takeaways清单（使用✅图标）
- 大型下载按钮
- 配图

#### 12. Keywords Footer（关键词页脚）
- 小字体斜体
- 列出所有核心和相关关键词

---

## 🔍 SEO优化要求

### Meta标签要求（在页面文件中设置）

**1. Primary Meta Tags**
```typescript
const title = "{游戏核心关键词} - {副标题}";  // ⚠️ 最多60字符
const description = "{包含核心关键词的描述，突出价值主张}";  // ⚠️ 最多160字符
const keywords = "{所有核心和相关关键词，逗号分隔}";
const url = "https://randompokegen.cc/games/{game-url-slug}";
const image = "{游戏封面图URL}";
```

**2. Open Graph标签**（社交媒体分享）
- og:type = "website"
- og:title
- og:description
- og:image (1200x630px)
- og:url
- og:site_name
- og:locale

**3. Twitter Card标签**
- twitter:card = "summary_large_image"
- twitter:title
- twitter:description
- twitter:image

**4. Additional SEO标签**
- canonical URL
- robots: "index, follow"
- language
- author
- publisher

**5. Structured Data（Schema.org）**

**VideoGame Schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "{游戏全名}",
  "alternateName": "{游戏别名}",
  "description": "{描述}",
  "genre": ["{类型1}", "{类型2}"],
  "gamePlatform": ["{平台1}", "{平台2}"],
  "operatingSystem": ["{系统要求}"],
  "author": {
    "@type": "Person",
    "name": "{开发者名}"
  },
  "offers": {
    "@type": "Offer",
    "price": "0",  // 如果免费
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  },
  "datePublished": "{发布日期}"
}
```

**BreadcrumbList Schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Home"},
    {"@type": "ListItem", "position": 2, "name": "Games"},
    {"@type": "ListItem", "position": 3, "name": "{游戏名称}"}
  ]
}
```

---

## 🎨 设计指南

### 配色方案
- 根据游戏主题选择主色调
- 使用渐变背景增强氛围
- 确保文字对比度足够（可访问性）
- 建议配色：
  - 深色背景主题：gray-900, black
  - 强调色：根据游戏主题（如红色for恐怖，蓝色for科幻）
  - 辅助色：黄色/金色用于高亮

### 视觉组件
- **卡片组件**：用于特性展示，带边框和背景
- **按钮**：大型CTA按钮，带hover效果和阴影
- **表格**：用于系统要求、游戏信息
- **图标**：使用emoji或图标增强可读性
- **图片**：使用圆角、边框、阴影
- **渐变框**：重要内容使用渐变背景框

### 响应式设计
- 使用Tailwind的响应式类（md:, lg:）
- Grid布局：移动端1列，桌面端2-4列
- 文字大小：移动端较小，桌面端较大
- 图片：使用object-cover确保比例

---

## 📦 资源处理

### 图片资源
1. **优先使用CDN链接**（如itch.io、Steam CDN）
2. **如果找不到实际图片**：
   - 创建占位符div
   - 标注「[Image placeholder - 需要替换]」
   - 说明需要什么类型的图片
3. **图片位置**：
   - Hero section（大背景）
   - 游戏介绍部分（游戏截图）
   - 下载章节（下载页面截图）
   - 视频章节（游戏场景）
   - 特色功能（功能展示）
   - 最终CTA（游戏艺术图）

### 视频资源
1. **YouTube视频**：
   - 如找到具体视频ID，使用iframe嵌入
   - 如找不到，创建占位符并提供YouTube搜索链接
2. **视频链接格式**：
   ```html
   <iframe
     width="800"
     height="450"
     src="https://www.youtube.com/embed/{VIDEO_ID}"
     ...
   </iframe>
   ```
3. **替代方案**：提供YouTube搜索结果链接

---

## ✅ 完成检查清单

### 文件创建
- [ ] 创建组件文件：`src/components/games/{GameName}.tsx`
- [ ] 创建页面文件：`src/pages/games/{game-name}.tsx`
- [ ] 更新导航配置：`src/pages/games/_meta.tsx`

### 内容完整性
- [ ] 包含所有11个主要章节
- [ ] 每个章节都有合适的标题（H2/H3）
- [ ] 下载章节是独立的H2章节
- [ ] FAQ包含6-8个问题
- [ ] 所有关键词自然融入内容

### SEO优化
- [ ] Title长度 ≤ 60字符，包含核心关键词
- [ ] Description长度 ≤ 160字符，包含核心关键词
- [ ] 添加所有Meta标签（Primary, OG, Twitter）
- [ ] 添加Canonical URL
- [ ] 添加VideoGame Schema
- [ ] 添加Breadcrumb Schema
- [ ] 核心关键词密度 4-6%
- [ ] 相关关键词密度 1-3%

### 视觉设计
- [ ] 使用游戏主题配色
- [ ] 添加背景图片/渐变
- [ ] 至少6张游戏图片（或占位符）
- [ ] CTA按钮有视觉吸引力
- [ ] 响应式设计（移动端友好）
- [ ] 卡片/表格/列表组织良好

### 功能测试
- [ ] 所有外部链接正确（target="_blank", rel="noopener noreferrer"）
- [ ] 下载链接正确
- [ ] YouTube链接可用
- [ ] 图片可加载（或已标注占位符）
- [ ] 页面在 `/games/{game-name}` 可访问

### 代码质量
- [ ] TypeScript类型正确
- [ ] 组件导入路径正确（使用@components别名）
- [ ] Tailwind类名正确
- [ ] 无控制台错误
- [ ] 代码格式整洁

---

## 🚀 使用方法

### 步骤1：填写变量
复制此提示词，替换以下占位符：

```
{游戏名称} = [游戏的完整名称]
{核心关键词1} = [主要搜索关键词]
{核心关键词2} = [第二主要关键词]
{核心关键词3} = [第三主要关键词]
{相关关键词1-5} = [相关长尾关键词]
{官方链接} = [游戏官方发布页面]
{资源链接1-2} = [其他参考资源]
{游戏下载链接} = [直接下载链接]
```

### 步骤2：提供给AI
将填写好的提示词提供给AI，并附上任务指令：

```
请按照上述详细提示词的要求，完成以下任务：
1. 搜索并收集游戏相关信息
2. 创建组件文件（带有氛围感的设计）
3. 创建页面文件（包含完整的SEO Meta标签）
4. 更新导航配置
5. 确保所有SEO优化要求都已满足
6. 在适当位置插入图片和视频（如找不到，使用占位符）
```

### 步骤3：验证完成
运行 `npm run dev` 并访问 `http://localhost:3000/games/{game-name}` 检查页面。

---

## 📌 示例填写（Brother Hai's Pho Restaurant）

```
{游戏名称} = Brother Hai's Pho Restaurant
{核心关键词1} = brother hai restaurant
{核心关键词2} = brother hai pho restaurant
{核心关键词3} = phở anh hai
{相关关键词1} = brother hai pho
{相关关键词2} = pho anh hai
{相关关键词3} = brother hai restaurant itch io
{相关关键词4} = brother hai restaurant download
{相关关键词5} = phở anh hai game
{官方链接} = https://marisa0704.itch.io/brother-hais-pho-restaurant
{资源链接1} = https://brotherhaisphorestaurant.org/
{资源链接2} = https://minesters.com/brother-hais-pho-restaurant/
{游戏下载链接} = https://marisa0704.itch.io/brother-hais-pho-restaurant/download/eyJleHBpcmVzIjoxNzYyMzU1MzU0LCJpZCI6Mzk4MDI0MH0%3d.ihTyAeJ7Aw0O4QVJNbbIzF%2b2LbU%3d
```

---

## 💡 额外提示

### 关于关键词研究
- 使用Google Trends查看搜索趋势
- 查看Google搜索建议（People also ask）
- 分析竞争对手页面的关键词
- 使用Ubersuggest或类似工具

### 关于内容质量
- 确保信息准确，来源可靠
- 自然融入关键词，避免堆砌
- 提供真实价值，不只是SEO
- 保持内容新鲜，定期更新

### 关于图片优化
- 使用描述性文件名
- 添加alt文本（包含关键词）
- 压缩图片大小
- 使用WebP格式（如可能）

### 关于性能
- 使用CDN加载图片
- 延迟加载图片（lazy loading）
- 压缩代码
- 避免过大的组件

---

## 📚 参考资源

- [Google SEO指南](https://developers.google.com/search/docs)
- [Schema.org VideoGame](https://schema.org/VideoGame)
- [Open Graph Protocol](https://ogp.me/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [Tailwind CSS文档](https://tailwindcss.com/docs)

---

**最后更新**: 2024-11-05
**模板版本**: v1.0
**适用项目**: Random Pokemon Generator (Next.js + Nextra)
