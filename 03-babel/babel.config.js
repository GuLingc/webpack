//相当于以前的webpack.config.js中的options里的内容，将其babel配置单独拿出，比较好管理
module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        //在开发中针对babel的浏览器兼容查询使用browerslist工具，而不是设置target
        //因为browserslist工具，可以在多个前端工具之间进行浏览器兼容性（postcss/babel）
        // targets: ">5%"
        // corejs: 3,
        // useBuiltIns: "usage"
      },
    ],
    //react转换的预设
    ["@babel/preset-react"]
  ],
};
