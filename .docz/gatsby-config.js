const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Docs',
    description:
      'This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: '/home/githui/Desktop/Docz/docs/.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Docs',
        description:
          'This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/home/githui/Desktop/Docz/docs',
          templates:
            '/home/githui/Desktop/Docz/docs/node_modules/docz-core/dist/templates',
          docz: '/home/githui/Desktop/Docz/docs/.docz',
          cache: '/home/githui/Desktop/Docz/docs/.docz/.cache',
          app: '/home/githui/Desktop/Docz/docs/.docz/app',
          appPackageJson: '/home/githui/Desktop/Docz/docs/package.json',
          appTsConfig: '/home/githui/Desktop/Docz/docs/tsconfig.json',
          gatsbyConfig: '/home/githui/Desktop/Docz/docs/gatsby-config.js',
          gatsbyBrowser: '/home/githui/Desktop/Docz/docs/gatsby-browser.js',
          gatsbyNode: '/home/githui/Desktop/Docz/docs/gatsby-node.js',
          gatsbySSR: '/home/githui/Desktop/Docz/docs/gatsby-ssr.js',
          importsJs: '/home/githui/Desktop/Docz/docs/.docz/app/imports.js',
          rootJs: '/home/githui/Desktop/Docz/docs/.docz/app/root.jsx',
          indexJs: '/home/githui/Desktop/Docz/docs/.docz/app/index.jsx',
          indexHtml: '/home/githui/Desktop/Docz/docs/.docz/app/index.html',
          db: '/home/githui/Desktop/Docz/docs/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
