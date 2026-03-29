# IPA Cards Web

国际音标学习卡片 - 一个交互式的 IPA（国际音标）学习工具。

## 功能特性

- 📚 包含 48 个国际音标（20个元音 + 28个辅音）
- 🔊 详细的发音规则和示例单词
- 🎮 多种学习模式：
  - 手动导航（上一张/下一张）
  - 顺序播放
  - 随机播放
  - 暂停功能
- 📱 响应式设计，支持移动端
- 📊 卡片索引快速跳转

## 技术栈

- HTML5 + CSS3
- JavaScript (ES6+)
- Docker (可选，用于容器化部署)

## 部署方法

### 方法一：使用 Docker（推荐）

1. 确保已安装 Docker 和 Docker Compose

2. 启动服务：
   ```bash
   ./manage.sh start
   ```

3. 访问应用：
   ```
   http://localhost:8080
   ```

4. 停止服务：
   ```bash
   ./manage.sh stop
   ```

5. 查看服务状态：
   ```bash
   ./manage.sh status
   ```

### 方法二：直接运行（无 Docker）

1. 使用 Python 启动简单服务器：
   ```bash
   cd /path/to/ipa-cards-web
   python3 -m http.server 8080
   ```

2. 访问应用：
   ```
   http://localhost:8080
   ```

3. 停止服务：按 `Ctrl + C`

## 项目结构

```
ipa-cards-web/
├── app.js              # 主要 JavaScript 文件
├── docker-compose.yml  # Docker Compose 配置
├── Dockerfile          # Docker 镜像构建文件
├── index.html          # 主页面
├── manage.sh           # 管理脚本
├── package-lock.json   # npm 依赖锁定文件
├── package.json        # npm 项目配置
├── playwright.config.js # Playwright 测试配置
├── ipa-cards.spec.js   # Playwright 测试脚本
├── README.md           # 项目说明文档
└── .gitignore          # Git 忽略文件
```

## 测试

### 使用 Playwright 运行测试

1. 确保已安装依赖：
   ```bash
   npm install
   npx playwright install
   ```

2. 启动本地服务器（方法二）

3. 运行测试：
   ```bash
   npx playwright test
   ```

4. 查看测试报告：
   ```bash
   npx playwright show-report
   ```

### 测试内容

测试覆盖以下功能：
- 页面加载和基本元素可见性
- 卡片内容显示
- 导航按钮功能
- 播放功能（顺序、随机、暂停）
- 索引按钮跳转
- 页面响应式

## 浏览器兼容性

- Chrome/Edge (最新版)
- Firefox (最新版)
- Safari (最新版)

## 开发说明

项目使用纯前端技术实现，无需后端服务器。所有数据都存储在 `app.js` 文件中。

## 贡献

欢迎提交 Pull Request 来改进项目！

## 许可证

MIT License

## 作者

cpluser09
