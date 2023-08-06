const path = require("path"); //引入path

module.exports = {
  devtool: 'source-map',
  //项目入口文件配置
  entry: "./src/index.js",
  //项目出口文件配置
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  },
  mode: "development",
};
