//引入path
const path = require("path");

module.export = {
  //入口文件
  entry: "./src/index.js",
  //出口文件
  output: {
    //__dirname:当前目录
    path: path.resolve(__dirname, "build"),
    //打包生成的文件名
    filename: "bundle.js",
  },
  mode:'development'
};
