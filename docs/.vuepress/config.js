const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: '',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
     //Hack: Make clicking on the logo go to home url
    ["script",
      {},
      `
    const logoUrlChanger = setInterval(function() {
    //Anchor above the logo image
    const homeEls = document.getElementsByClassName("home-link");
    if(homeEls.length > 0) {
      const homeEl = homeEls[0];
      homeEl.setAttribute("href", "https://pikatea.com");
      homeEl.setAttribute("onclick", "document.location='https://pikatea.com';return false;");
      clearInterval(logoUrlChanger);
    }

    //Actual logo image
    const logoEls = document.getElementsByClassName("logo")
    if(logoEls.length > 0) {
      const logoEl = logoEls[0]
      logoEl.setAttribute("onclick", "document.location='https://pikatea.com';return false;");
      clearInterval(logoUrlChanger);
    }
    }, 1000) 

  `
    ]
  ],
  base: '/',

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    logo: 'https://cdn.shopify.com/s/files/1/0322/9637/0235/files/Cropped_logo_210x.png?v=1590650137',
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Store Page',
        link: 'https://www.pikatea.com/',
        target:'_self', 
        rel:false 
      },
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'VuePress',
        link: 'https://v1.vuepress.vuejs.org'
      }
    ],
    // sidebar: {
    //   '/products/': [
    //     '', // this is your docs/README.md
    
    //     {
    //       title: 'Products2',
    //       collapsable: true,
    //       children: [
    //         'PikateaMacropadGB3/',
    //         'PikateaMacropadGB3/pikatea-macropad-gb3-user-guide',
    //         'PikateaMacropadGB3/pikatea-macropad-gb3-kit-assembly-guide',
    //       ]
    //     },
    //     // {
    //     //   title: 'Guides',
    //     //   collapsable: false,
    //     //   children: [
    //     //     'guides/', // 'docs/guides/README.md' if you renamed before
    //     //     'guides/firstApplication',              
    //     //   ]
    //     // },
    //     // {
    //     //   title: 'Media',
    //     //   collapsable: false,
    //     //   children: [
    //     //     'media/', // 'docs/media/README.md' if you renamed before
    //     //     'media/downloads/brochure',
    //     //     'media/onlineResources/articles',
    //     //     'media/onlineResources/videos', 
    //     //   ]
    //     // }
    //   ],
    
    //   '/': [ // Your fallback (this is your landing page)
    //     '' // this is your README.md (main)
    //   ]       
    // }
    sidebar: [
      {
        title: 'Introduction',   // required
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          ['/', 'Getting Started']
          // ['contribute','Suggest Changes'],
          // ['Need']
        ]
      },
      {
        title: 'Pikatea Macropad GB3',   // required
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          ['/PikateaMacropadGB3/', 'Pikatea Macropad GB3 User Guide'],
          ['/PikateaMacropadGB3/pikatea-macropad-gb3-kit-assembly-guide', 'Pikatea Macropad GB3 Kit Assembly Guide'],
        ]
      },
      {
        title: 'Other Guides',   // required
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          ['/guide/', 'Extra Pikatea Macropad Tips and Tricks'],
          ['/guide/firmware-download-and-update-guide', 'Firmware Downloads and Update Guide'],
        ]
      },
      {
        title: 'Pikatea Macropad GB2',   // required
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          ['/PikateaMacropadGB2/', 'Pikatea Macropad GB2 User Guide'],
          ['/PikateaMacropadGB2/pikatea-macropad-gb2-kit-assembly-guide', 'Pikatea Macropad GB3 Kit Assembly Guide'],
        ]
      },
      {
        title: 'Macropad1x5',   // required
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          ['/Macropad1x5/', 'Macropad1x5 User Guide'],
          ['/Macropad1x5/macropad1x5-kit-assembly-guide', 'Macropad1x5 Kit Assembly Guide'],
        ]
      },
    ]
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
