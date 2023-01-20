import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: 'New UI',
  description: 'Playbook',

  cleanUrls: 'without-subfolders',

  themeConfig: {
    nav: [
      { text: 'Guide', link: '/getting-started' },
      { text: 'Changelog', link: 'https://new-ui.com/' }
    ],

    sidebar: [
      {
        text: 'Foundations',
        collapsible: true,
        items: [
          { text: 'Colors', link: '/colors' },
          { text: 'Effects', link: '/link' },
          { text: 'Icons', link: '/link' },
          { text: 'Layouts', link: '/link' },
          { text: 'Spacings', link: '/link' },
          { text: 'Typography', link: '/link' },
        ]
      },
      {
        text: 'Components',
        collapsible: true,
        items: [
          { text: 'Accordion', link: '/Accordion' },
          { text: 'Avatar', link: '/Avatar' },
          { text: 'Badge', link: '/Badge' },
          { text: 'Breadcrumb', link: '/Breadcrumb' },
          { text: 'Button', link: '/Button' },
          { text: 'Button group', link: '/Button group' },
          { text: 'Callout card', link: '/Callout card' },
          { text: 'Card', link: '/Card' },
          { text: 'Checkbox', link: '/Checkbox' },
          { text: 'Choice list', link: '/Choice list' },
          { text: 'Code snippet', link: '/Code snippet' },
          { text: 'Data table', link: '/Data table' },
          { text: 'Date picker', link: '/Date picker' },
          { text: 'Description list', link: '/Description list' },
          { text: 'Dropdown', link: '/Dropdown' },
          { text: 'Drop zone', link: '/Drop zone' },
          { text: 'Empty state', link: '/Empty state' },
          { text: 'Filters', link: '/Filters' },
          { text: 'File uploader', link: '/File uploader' },
          { text: 'Form', link: '/Form' },
          { text: 'Inline error', link: '/Inline error' },
          { text: 'Keyboard key', link: '/Keyboard key' },
          { text: 'Link', link: '/Link' },
          { text: 'List', link: '/List' },
          { text: 'Modal', link: '/Modal' },
          { text: 'Overflow menu', link: '/Overflow menu' },
          { text: 'Page actions', link: '/Page actions' },
          { text: 'Pagination', link: '/Pagination' },
          { text: 'Popover', link: '/Popover' },
          { text: 'Progress bar', link: '/Progress bar' },
          { text: 'Radio button', link: '/Radio button' },
          { text: 'Select', link: '/Select' },
          { text: 'Slider', link: '/Slider' },
          { text: 'Spinner', link: '/Spinner' },
          { text: 'Structured list', link: '/Structured list' },
          { text: 'Tabs', link: '/Tabs' },
          { text: 'Tag', link: '/Tag' },
          { text: 'Textarea', link: '/Textarea' },
          { text: 'Text input', link: '/Text input' },
          { text: 'Toast', link: '/Toast' },
          { text: 'Toggle', link: '/Toggle' },
          { text: 'Tooltip', link: '/Tooltip' },
          { text: 'Tree view', link: '/Tree view' },
        ]
      },
      {
        text: 'Patterns',
        collapsible: true,
        items: [
          { text: 'Global headers', link: '/Global headers' },
          { text: 'Sidebar navigation', link: '/Sidebar navigation' },
          { text: 'Search', link: '/Search' },
          { text: 'Sidebar overlays', link: '/Sidebar overlays' },
        ]
      },
      {
        text: 'Data visualization',
        collapsible: true,
        items: [
          { text: 'Color palettes', link: '/Color palettes' },
          { text: 'Chart types', link: '/Chart types' },
          { text: 'Dashboards', link: '/Dashboards' },
        ]
      },
      {
        text: 'Examples',
        collapsible: true,
        items: [
          { text: 'Application shells', link: '/Application shells' },
          { text: 'Log in', link: '/Log in' },
          { text: 'Settings', link: '/Settings' },
          { text: 'Sign in', link: '/Sign in' },
          { text: 'User profile', link: '/User profile' },
        ]
      },
      {
        text: 'Utilities',
        collapsible: true,
        items: [
          { text: 'Dev-handoff helpers', link: '/Dev-handoff helpers' },
        ]
      },
    ],

    footer: {
      copyright: 'Copyright © 2023 Abhimanyu Rana.'
    }
  
  }
})