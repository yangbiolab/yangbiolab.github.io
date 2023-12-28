# 使用GitHub Actions + vitepress 搭建静态文档网站
## 创建vitepress静态文档

### 基本配置

**Step. 1：** 在GitHub上新建一个仓库，把这个仓库克隆到本地

**Step. 2：** 使用编辑器打开这个克隆到本地的仓库文件夹，在仓库文件夹路径下 初始化`package.json`

**Step. 3：** 在仓库文件夹中安装`vitepress`

**Step. 4：** 在仓库文件夹中，新建一个文件夹，名字是: `docs`

**Step. 5：** 在`仓库文件夹/docs`中,新建一个文件：`index.md`,写入以下代码:

```md
---
home: true
heroImage: /logo.png
heroAlt: Logo image
heroText: Hero Title
tagline: Hero subtitle
actionText: Get Started
actionLink: /guide/
features:
  - title: Simplicity First
    details: Minimal setup with markdown-centered project structure helps you focus on writing.
  - title: Vue-Powered
    details: Enjoy the dev experience of Vue + webpack, use Vue components in markdown, and develop custom themes with Vue.
  - title: Performant
    details: VitePress generates pre-rendered static HTML for each page, and runs as an SPA once a page is loaded.
footer: MIT Licensed | Copyright © 2019-present Evan You
---
```

### 进阶配置

**Step. 1：** 在`docs`目录下，创建一个`.vitepress`目录

**Step. 2：** 在`.vitepress`目录下，新建一个文件：`config.ts`,准备配置网站

**Step. 3：** 使用编辑器打开 `config.ts`,编写配置结构

```ts
export default {

}
```

**Step. 4：** 配置网站左上角的名称

```ts
export default {
  title: "网站名称"
}
```

**Step. 5：** 配置网站根目录

```ts
export default {
    title: "网站名称"
    // 格式是: /仓库名称
    base: "/vitepressDemo",
}
```

**Step. 6：** 配置文档`markdown语法下 代码是否显示行数`

```ts
export default {
  title: "网站名称",
  markdown: {
    lineNumbers: true
  }
}
```

**Step. 7：** 网站主题风格配置

```ts
export default {
  markdown: {
    lineNumbers: true
  },
  // 主题配置
  themeConfig: {
    // 文档所在的文件夹
    docsDir: 'docs',
  }
}
```

**Step. 8：** 网站右上导航配置

```ts
export default {
  // 主题配置
  themeConfig: {
    // 文档所在的文件夹
    docsDir: 'docs',
    // 头部nav
    nav: [
      {text: '哔哩哔哩', link: "https://space.bilibili.com/36036472"},
      // ...省略多个
    ]
  }
}
```

**Step. 9：** 网站左边侧边栏配置

```ts
export default {
  // 主题配置
  themeConfig: {
    // 文档所在的文件夹
    docsDir: 'docs',
    // 头部nav
    nav: [
      {text: '哔哩哔哩', link: "https://space.bilibili.com/36036472"},
      // ...省略多个
    ],
    sidebar: {
      // 斜杠代表的是docs文件夹
      '/': [
        {text: "基础语法", children: [
          {text: "标题", link: "/document/文件路径不要后缀"}
        ]}
      ]
    }
  }
}
```

## 把静态文档部署到GitHub

**Step. 1：** 在仓库文件夹中，创建`.github`文件夹

**Step. 2：** 在`.github`文件夹中，创建`main.yml`文件

**Step. 3：** 在`main.yml`文件，写入以下的`Github Actions`代码

**Step. 4：** 在`main.yml`文件，写入以下的`Github Actions`代码

```yml
# 这里是actions的名字 意思是 部署 GitHub pages这个静态文档网站
name: Deploy GitHub Pages
# on的意思是 当出现什么情况干jobs里的事情 而on后面的代码就是 当我们把代码push到main分支的时候 让githubactions去做jobs中的事情
on:
  # 每当 push 到 main 分支时触发部署
  push:
    branches: [main]
  # 手动触发部署
  workflow_dispatch:

jobs:
  docs:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2
        with:
          # “最近更新时间” 等 git 日志相关信息，需要拉取全部提交记录
          fetch-depth: 0

      - name: Setup Node.js
        uses: actions/setup-node@v1
        with:
          # 选择要使用的 node 版本
          node-version: '14'

      # 缓存 node_modules
      - name: Cache dependencies
        uses: actions/cache@v2
        id: package-cache
        with:
          path: |
            **/node_modules
          key: ${{ runner.os }}-yarn-${{ hashFiles('**/yarn.lock') }}
          restore-keys: |
            ${{ runner.os }}-yarn-

      # 如果缓存没有命中，安装依赖
      - name: Install dependencies
        if: steps.yarn-cache.outputs.cache-hit != 'true'
        run: yarn --frozen-lockfile

      # 运行构建脚本
      - name: Build VuePress site
        run: yarn docs:build

      # 查看 workflow 的文档来获取更多信息
      # @see https://github.com/crazy-max/ghaction-github-pages
      - name: Deploy to GitHub Pages
        uses: crazy-max/ghaction-github-pages@v2
        with:
          # 部署到 gh-pages 分支
          target_branch: gh-pages
          # 部署目录为 VuePress 的默认输出目录
          build_dir: docs/.vitepress/dist 
        env:
          # @see https://docs.github.com/cn/actions/reference/authentication-in-a-workflow#about-the-github_token-secret
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

**Step. 5：** 去`GitHub`中创建上面代码最后一行的`secrets.GITHUB_TOKEN`


**Step. 6：** 设置`GitHub Pages`的根目录

## [markdown-emojis](https://github.com/markdown-templates/markdown-emojis)
