const path = require("path");
const { VuetifyPlugin } = require("webpack-plugin-vuetify");

module.exports = {
  configureWebpack: {
    devtool: "eval",
    plugins: [
      new VuetifyPlugin({
        // Specify Vuetify styles or configuration if needed
      })
    ]
  },
};
