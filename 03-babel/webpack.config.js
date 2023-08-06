const path = require("path"); //引入path

module.exports = {
  mode: "development",
  devtool: "source-map",
  //项目入口文件配置
  entry: "./src/index.js",
  //项目出口文件配置
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
    // 重新打包时，先将之前打包得文件夹删除掉
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          // options: {
          //   presets: [
          //     ["@babel/preset-env",{
          //     //在开发中针对babel的浏览器兼容查询使用browerslist工具，而不是设置target
          //     //因为browserslist工具，可以在多个前端工具之间进行浏览器兼容性（postcss/babel）
          //     // targets: ">5%"
          //     }]
          //   ],
          // },
        },
      },
    ],
  },
};
