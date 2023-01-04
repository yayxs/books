import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'
export default withMermaid(
  defineConfig({
    lang: 'en-US',
    title: '读书笔记',
    description: '前端诗人-读书笔记',

    lastUpdated: true,
    cleanUrls: 'without-subfolders',

    head: [['meta', { name: 'theme-color', content: '#3c8772' }]],

    markdown: {
      headers: {
        level: [0, 0]
      }
    },

    themeConfig: {
      nav: nav(),

      sidebar: {
        '/guide/': sidebarGuide()
      },

      editLink: {
        pattern: 'https://github.com/yayxs/reading-notes/edit/main/docs/:path',
        text: 'Edit this page on GitHub'
      },

      socialLinks: [
        { icon: 'github', link: 'https://github.com/yayxs/reading-notes' }
      ],

      footer: {
        message: '一些读书笔记',
        copyright: 'Copyright © 2023-present vanlee'
      }

      // algolia: {
      //   appId: '8J64VVRP8K',
      //   apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
      //   indexName: 'vitepress'
      // },

      // carbonAds: {
      //   code: 'CEBDT27Y',
      //   placement: 'vuejsorg'
      // }
    }
  })
)

function nav() {
  return [
    { text: 'Guide', link: '/guide/dingwei', activeMatch: '/guide/' }
    // {
    //   text: '',
    //   items: [
    //     {
    //       text: 'Changelog',
    //       link: 'https://github.com/yayxs/reading-notes/blob/main/CHANGELOG.md'
    //     },
    //     {
    //       text: 'Contributing',
    //       link: 'https://github.com/yayxs/reading-notes/blob/main/.github/contributing.md'
    //     }
    //   ]
    // }
  ]
}

function sidebarGuide() {
  return [
    {
      text: '专业之外',
      collapsible: true,
      items: [
        { text: '《定位》', link: '/guide/dingwei' }
        // { text: 'Getting Started', link: '/guide/getting-started' },
        // { text: 'Configuration', link: '/guide/configuration' },
        // { text: 'Deploying', link: '/guide/deploying' }
      ]
    }
  ]
}
