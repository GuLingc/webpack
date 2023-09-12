//module.exports={}相当于webpack导出了一个对象，实际上webpack还可以导出一个函数
module.exports = {
  mode: "development",
  //devServer是开发环境中的配置，在生产环境中不存在
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
  plugins: [],
};
