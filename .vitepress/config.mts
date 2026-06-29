import { defineConfig } from "vitepress";
import { set_sidebar } from "../utils/auto-sidebar.js";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/VitePress-test/",
  // srcDir: "docs", // 配置md文档的映射目录
  title: "",
  description: "",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outlineTitle: "结构目录",
    outline: [2, 3],

    // 导航链接，顶部导航栏配置
    nav: [
      { text: "家", link: "/" },

      //导航链接也可以是下拉菜单
      {
        text: "编程语言",
        items: [
          // 下拉菜单的还可以继续在text后继续嵌套下拉菜单items
          { text: "Rust", link: "/rust/介绍" },
        ],
      },
      { 
        text: "前端",
        items: [
          { text: "React", link: "/React/base" },
        ],
      },
    ],

    // sidebar: {
    //   "/rust/base/":[
    //     { text: 'owner', link: '/rust/base/owner' },
    //     { text: '1', link: '/rust/base/1' },
    //   ],

    //   "/rust/":[
    //     { text: '介绍', link: '/rust/介绍' },
    //     { text: '基础', link: '/rust/base/owner' },
    //     { text: '进阶', link: '/rust/pro/指针' },
    //   ],
    //   "/React/":[
    //     { text: 'Introduction', link: '/React/base' },
    //   ],
    // },
    sidebar: {
      // set_sidebar传入文件夹路径就可以遍历当前文件夹的文件,并返回出来想要的格式了,/代表当前项目根目录
      "/rust/base/": set_sidebar("/rust/base"), 
      "/rust/pro/": set_sidebar("/rust/pro"),
      "/rust/":[
        { text: '介绍', link: '/rust/介绍' },
        { text: '基础', link: '/rust/base/owner' },
        { text: '进阶', link: '/rust/pro/指针' },
      ],
    },
    socialLinks: [{ icon: "github", link: "https://github.com/169LI" }],
    // 底部配置
    footer: {
      message: 'Released under the <a href="https://github.com/169LI/VitePress-test/blob/main/LICENSE.md">MIT License</a>.',
      copyright:
        'Copyright © 2025-present <a href="https://github.com/169LI">Quan Li</a>',
    },
    // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
    editLink: {
      pattern: "https://github.com/169LI/VitePress-test/main/docs/:path",
      text: "Edit this page on GitHub",
    },
  },
});
