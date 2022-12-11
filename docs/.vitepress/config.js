export default {
  themeConfig: {
    siteTitle: false,
    logo: "/logo.jpg",
    nav: [
      { text: "指南", link: "/guild/installation" },
      { text: "组件", link: "/examples/notel-button/" },
    ],
    socialLinks: [{ icon: "github", link: "" }],
    sidebar: {
      "/guild/": [
        {
          text: "基础",
          items: [
            {
              text: "安装",
              link: "/guild/installation",
            },
            {
              text: "快速开始",
              link: "/guild/quickstart",
            },
          ],
        },
        {
          text: "进阶",
          items: [
            {
              text: "xx",
              link: "/xx",
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
              link: "/examples/",
            },
          ],
        },
      ],
    },
  },
}

