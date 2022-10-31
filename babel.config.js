// 这是项目发布阶段需要用到的babel插件
const prodPlugins = []
// 发布阶段
if (process.env.NODE_ENV === 'production') {
  prodPlugins.push('transform-remove-console')
}

module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk'
      }
    ],
    // 展开运算符，把数组里的每一项展开放到另一个数组中,发布产品时候的插件数组
    ...prodPlugins,
    // 声明路由懒加载
    '@babel/plugin-syntax-dynamic-import'
  ]
}
