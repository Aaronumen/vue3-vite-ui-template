export default {
  base:'/notel-ui-doc/', //当部署不为根目录时必须加上此路径名，比如 github部署时项目名为notel-ui-doc，必须设置此base
  themeConfig: {
    algolia: {
      apiKey: 'your_api_key',
      indexName: 'index_name'
    },
    siteTitle: false,
    logo: "/logo.png",
    nav: [
      { text: "指南", link: "/guide/installation" },
      { text: "组件", link: "/examples/notel-button/" },
    ],
    socialLinks: [{ icon: "github", link: "" }],
    sidebar: {
      "/guide/": [
        {
          text: "基础",
          items: [
            {
              text: "安装",
              link: "/guide/installation",
            },
            {
              text: "快速开始",
              link: "/guide/quickstart",
            },
          ],
        },
      ],
      "/examples/": [
        {
          text: "基础组件",
          items: [
            {
              text: "Button按钮",
              link: "/examples/notel-button/",
            },
            {
              text: "Icon图标",
              link: "/examples/notel-input/",
            },
            {
              text: "Tsx组件",
              link: "/examples/notel-tsx/",
            },
          ],
        },
      ],
    },
  }
}


