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
  }
})
