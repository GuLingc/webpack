const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path"); //引入path

module.exports = {
  mode: "development",
  devtool: false,
  //项目入口文件配置
  //单入口
  entry: "./src/index.js",
  //项目出口文件配置
  output: {
    path: path.resolve(__dirname, "build"),
    //只适合入口文件
    // filename: "bundle.js",
    //多入口文件，输出多个包文件，应该采用占位符，否则多个入口文件对应一个出口文件会报错。name占位符取得值是入口文件对象中的属性名
    filename: "bundle.js",
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
        changeOrigin: true,
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
