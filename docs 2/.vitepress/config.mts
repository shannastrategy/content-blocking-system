import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Content Blocking System',
  description: 'A scalable approach to UX content',

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/examples/order-overview-content-block' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Order overview content block', link: '/examples/order-overview-content-block' },
          { text: 'Order overview breakdown', link: '/examples/order-overview-breakdown' },
          { text: 'Order overview module library', link: '/examples/order-overview-module-library' },
          { text: 'Build a page', link: '/examples/page-assembler' }
        ]
      }
    ]
  }
})
