import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid({
  title: 'Content Blocking System',
  description: 'A scalable approach to UX content',

  themeConfig: {
    outline: false,
    sidebar: false,

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Framework', link: '/framework' },
      { text: 'Haven example', link: '/examples/haven-order-overview' },
      { text: 'Build a page', link: '/examples/page-assembler' }
    ]
  },

  mermaid: {},
})
