// const path = require('path')

// function resolve(dir) {
//   return path.join(__dirname, dir)
// }

module.exports = {
  publicPath: './',
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = '管理系统模板'
        return args
      })

    // config.resolve.alias
    //   .set('@', resolve('./src'))
  },
  devServer: {
    host: '127.0.0.1',
    port: 8000,
    proxy: {
      '/api': {
        target: 'http://192.168.0.202',
        ws: true,
        changOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
  outputDir: process.env.outputDir,
  // configureWebpack: {
  //   externals: {
  //     AMap: 'AMap',
  //   },
  // },
}
