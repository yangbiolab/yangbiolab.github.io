export default {
  base: '/',
  // 主题配置
  title: 'YangLab@FJMU',
  description: 'Microbiome',
  appearance: true,
  markdown: {
    theme: 'material-theme-palenight',
    lineNumbers: true,
    
    // adjust how header anchors are generated,
    // useful for integrating with tools that use different conventions
    anchors: {
      slugify(str) {
        return encodeURIComponent(str)
      }
    }
  },
  themeConfig: {
    siteTitle: 'YangLab',
    socialLinks: [ {icon: 'github', link: 'https://github.com/yangbiolab' }],
    lastUpdatedText: 'Updated Date',
    carbonAds: {
      code: 'your-carbon-code',
      placement: 'your-carbon-placement'
    },
    // 文档所在的文件夹
    docsDir: 'docs',
    // 头部nav 
    nav: [
      {text: 'About ', link: "/About/"},
      {text: 'Publications', link: "/Publications/"},
      {text: 'Team', link: "/Team/"},
      {text: 'Lab Fun', link: "/LabFun/"},
      {text: 'News', link: "/News/"},
      {text: 'Contact', link: "/Contact/"}
    ],
    sidebar: {
      // 斜杠代表的是docs文件夹
      '/Publications/': [ {text: "Goal", children: [{text: "gut microbiome", link: "/Aboult/goal"}] }]
    },
    footer: {
      message: 'Last revised：2023.03.23',
      copyright: '闽ICP备2022017705号 <script type="text/javascript" src="//rf.revolvermaps.com/0/0/7.js?i=5qacqwoylqa&amp;m=7&amp;c=ff0000&amp;cr1=ffffff&amp;sx=0" async="async"></script>'

    }
  }
}
