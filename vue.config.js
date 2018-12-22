const path = require("path");
module.exports = {
  configureWebpack: {
    devtool: "eval"
  },
  chainWebpack: config => {
    const oneOfsMap = config.module.rule("sass").oneOfs.store;
    oneOfsMap.forEach(item => {
      item
        .use("sass-resources-loader")
        .loader("sass-resources-loader")
        .options({
          resources: ["./src/styles/vars.sass", "./src/styles/mixins.sass"]
        })
        .end();
    });
    if (process.env.NODE_ENV !== "production") {
      config.module
        .rule("istanbul")
        .test(/\.(js|vue)$/)
        .enforce("post")
        .include.add(path.resolve(__dirname, "/src"))
        .end()
        .use("istanbul-instrumenter-loader")
        .loader("istanbul-instrumenter-loader")
        .options({ esModules: true })
        .end();
    }
  }
};
