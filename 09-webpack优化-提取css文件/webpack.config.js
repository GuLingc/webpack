const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
//引入css插件
const MinCssExtractPlugin = require("mini-css-extract-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  devtool: false,
  entry: "./src/math.js",
  output: {
    path: path.resolve(__dirname, "build"),
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
  devServer: {
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
  //优化配置
  optimization: {
    //配置打包后生成的样式
    //developend:named   和在开发模式生成下的名字一样
    //production:  deterministic  和在生产模式生成下的名字一样，生成固定的id
    //webpack4中使用natural： 按包文件顺序生成id值，id值可变
    chunkIds: "deterministic",
    //runtime的代码是否抽取到单独的包中（vue2脚手架）
    runtimeChunk: {
      name: "runtime",
    },
    //动态分包配置
    splitChunks: {
      chunks: "all",
      // //当一个包大于指定的大小时，继续进行拆分（注意如果最后拆分的不符合完整性，可能不拆），单位：B
      // maxSize: 20000,
      // //将包拆分不小于指定的大小的包，单位：B
      // minSize: 20000
      //当不进行配置的时候由官方文档可知，一个包的最小值时20kB如果，写的文件国小则不会单独分一个包
      minSize: 20,

      //自定义分包
      //自己对需要进行拆包的内容进行分包
      cacheGroups: {
        venders: {
          test: /[\\/]node_modules[\\/]/,
          filename: "js/[name]_venders.js",
        },
        utils: {
          test: /utils/,
          filename: "js/[name]_utils.js",
        },
      },
    },
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
          //"style-loader",//开发环境中使用，以内联的形式存在html中
          MinCssExtractPlugin.loader,//生产环境中使用，以文件的形式引入在html中
           "css-loader"
          ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    //完成对css的提取
    new MiniCssExtractPlugin({
    //基础引入生成的饿文件样式：import './css/index.css'
    filename: 'css/[name].css',
    //css文件动态导入后提取的文件样式: import('./css/index.css')
    chunkFilename: 'css/[name]_chunk.css'
    })
  ],
};
