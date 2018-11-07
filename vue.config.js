const path = require("path");
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        assets: path.resolve(__dirname, "./src/assets/"),
        styles: path.resolve(__dirname, "./src/styles/"),
        vars: path.resolve(__dirname, "./src/styles/1-base/_vars.sass"),
        mixins: path.resolve(
          __dirname,
          "./src/styles/0-plugins/_mixin-extends.sass"
        )
      }
    }
  }
};
