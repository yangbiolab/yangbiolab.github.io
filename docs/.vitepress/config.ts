export default {
  title: 'YangLab',
  description: 'Yang Lab in FJMU',
  base: "/",
  // 主题配置
  themeConfig: {
    siteTitle: 'YangLab@FJMU',
    logo: '/background.jpeg',
    socialLinks: [
      {icon: 'github', link: 'https://github.com/yangbiolab' },
      {icon: {svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>'},
       link: '...'},
      ],
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
      '/Aboult/': [
        {text: "Goal", children: [
          {text: "gut microbiome", link: "/Aboult/goal"}
        ]}
      ]
    },
     footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You',
      '闽ICP备2022017705号'
    }
  }
}
