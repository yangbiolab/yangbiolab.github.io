export default {
  base: "/",
  // 主题配置
  themeConfig: {
    // 文档所在的文件夹
    docsDir: 'docs',
    // 头部nav 
    nav: [
      {text: 'Aboult ', link: "/Aboult"},
      {text: 'Publications', link: "/Publications"},
      {text: 'Team', link: "/Team"},
      {text: 'Lab Fun', link: "/LabFun"},
      {text: 'News', link: "/News"},
      {text: 'Contact', link: "/Contact"},
    ],
    sidebar: {
      // 斜杠代表的是docs文件夹
      '/Aboult': [
        {text: "Goal", children: [
          {text: "gut microbiome", link: "/Aboult/goal"}
        ]}
      ]
    }
  }
}
