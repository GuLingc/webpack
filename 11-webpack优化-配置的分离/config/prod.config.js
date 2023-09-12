const TerserPlugin = require("terser-webpack-plugin");
//引入css插件
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//引入css压缩插件
const CSSMinimizerPlugin = require("css-minimizer-webpack-plugin");

//module.exports={}相当于webpack导出了一个对象，实际上webpack还可以导出一个函数
module.exports = {
  mode: "production",
  //优化配置：一般只用于生产环境，开发环境中不需要优化
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
    minimize: true,
    //代码优先：TerserPlugin=>让代码更简单=>Terser
    minimizer: [
      //JS压缩插件： TerserPlugin
      new TerserPlugin({
        extractComments: false,
        terserOptions: {
          compress: {
            arguments: true,
            //默认为true,即打包文件中没有用的代码（例如：定义函数却没有调用）会被删除，在打包文件中不存在
            unused: true,
          },
          mangle: true,
          keep_fnames: true,
        },
      }),
      //CSS压缩插件:CSSMinimizerPlugin
      new CSSMinimizerPlugin({
        //parallel的默认值是true,所以可以不写
        // parallel:true
      }),
    ],
  },
  plugins: [
    //完成对css的提取：只有在最终打包的生产环境下才做提取，开发环境下不需要
    new MiniCssExtractPlugin({
      //基础引入css（import './css/index.css'）生成的文件样式：
      filename: "css/[name].css",
      //css文件动态导入( import('./css/index.css'))后提取的文件样式:
      chunkFilename: "css/[name]_chunk.css",
    }),
  ],
};
