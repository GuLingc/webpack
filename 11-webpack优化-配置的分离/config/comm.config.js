const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { ProvidePlugin } = require("webpack");
//引入css插件
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//合并环境配置
const { merge } = require("webpack-merge");
const devConfig = require("./dev.config");
const prodConfig = require("./prod.config");

//module.exports={}相当于webpack导出了一个对象，实际上webpack还可以导出一个函数
const getCommonConfig = function (isProduction) {
  return {
    devtool: false,
    //默认是项目的根目录
    entry: "./src/math.js",
    output: {
      path: path.resolve(__dirname, "../build"),
      filename: "js/[name]_bundle.js",
      chunkFilename: "js/[name]_chunk.js",
      clean: true,
    },
    //排除某些包不需要进行打包，利用cdn并在相关网站中找到对应的包的链接写在入口的html文件script标签中，页面即可正常显示
    externals: {
      //key属性名：排除的框架的名称
      //value值：从CDN地址请求下来的js中提供对应的名称
      react: "React",
      axios: "axios",
    },
    resolve: {
      extensions: [".js", ".json", ".wasm", ".jsx", ".vue", ".ts"],
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.ts$/,
          use: "babel-loader",
        },
        {
          test: /\.css$/,
          use: [
            //"style-loader", //开发环境中使用，以内联的形式存在html中
            // MiniCssExtractPlugin.loader, //生产环境中使用，以文件的形式引入在html中
            isProduction ? MiniCssExtractPlugin.loader : "style-loader",
            "css-loader",
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./index.html",
      }),
      new ProvidePlugin({
        axios: ["axios", "default"],
        dayjs: "day.js",
      }),
    ],
  };
};

//webpack允许导出一个函数
module.exports = function (env) {
  const isProduction = env.production;
  let mergeConfig = isProduction ? prodConfig : devConfig;
  return merge(getCommonConfig(isProduction), mergeConfig);
};
