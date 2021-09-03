module.exports = {
  lintOnSave: false,
  transpileDependencies: [
    'vue-echarts',
    'resize-detector'
  ],
  configureWebpack: {
    devtool: 'source-map'
  }
}
