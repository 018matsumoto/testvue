module.exports = {
  // configureWebpack: {
  //   devtool: 'source-map',
  // },
  outputDir: 'docs',
  // assetsDir: './',
  publicPath: process.env.NODE_ENV === 'production'
  ? '/testvue/'
  : '/'
}