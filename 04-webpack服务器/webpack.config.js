const HtmlWebpackPlugin = require("html-webpack-plugin");
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
  resolve: {
    //可以是引入文件的时候不加文件的后缀名
    extensions: [".js", ".json", ".wasm", ".jsx", ".vue", ".ts"],
  },
  //存放静态文件的文件夹，如果文件夹名称是public则可以默认不写，因为它是默认值
  devServer: {
    static: ["public"],
    proxy: {
      "/api": {
        target: "http://localhost:9000",
        pathRewrite: {
          "^/api": "",
        },
        changeOrigin: true
      },
    },
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, //x?:表示0个或者一个x
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
      //解析ts
      {
        test: /\.ts$/,
        // use: "ts-loader" //安装ts-loader：npm install ts-loader -D   下一步创建tsconfig文件：tsc --init
        //为了方便以后的运行配置，或者如果ts文件中出现了es新出的方法进行补丁建议使用babel-loader
        use: "babel-loader",
      },
    ],
  },
  //打包html文件
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
};
