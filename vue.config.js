const GoogleFontsPlugin = require('google-fonts-plugin')

module.exports = {
  configureWebpack: {
    plugins: [
      new GoogleFontsPlugin('./src/fonts.json')
    ]
  }
}