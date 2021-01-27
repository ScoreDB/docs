import theme from '@nuxt/content-theme-docs'

// noinspection JSUnusedGlobalSymbols
export default theme({
  docs: {
    primaryColor: '#1e90ff'
  },
  i18n: {
    locales: () => [{
      code: 'zh',
      iso: 'zh-CN',
      file: 'zh-CN.js',
      name: '简体中文'
    }],
    defaultLocale: 'zh'
  },
  colorMode: {
    preference: 'system'
  },
  pwa: {
    meta: {
      name: 'ScoreDB Docs'
    },
    manifest: {
      name: 'The documentations of ScoreDB v3',
      short_name: 'ScoreDB Docs',
      lang: 'zh'
    }
  }
})
