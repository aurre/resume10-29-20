const GoogleFontsPlugin = require('google-fonts-plugin')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/resume-vue' : '/',
  configureWebpack: {
    plugins: [
      new GoogleFontsPlugin('./src/fonts.json')
    ]
  }
}