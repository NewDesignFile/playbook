import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: 'New UI',
  description: 'New UI Playbook',

  themeConfig: {
    nav: [
      { text: 'Guide', link: '/getting-started' },
      { text: 'Changelog', link: 'https://new-ui.com/' }
    ],

    sidebar: [
      {
        text: 'Components',
        items: [
          { text: 'Avatar', link: '/avatar' },
          { text: 'Link', link: '/link' },
        ]
      }
    ]
  }
})