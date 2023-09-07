//相当于以前的webpack.config.js中的options里的内容，将其babel配置单独拿出，比较好管理
module.exports = {
  presets: [
    ["@babel/preset-env", {}],
    ["@babel/preset-react"],
    [
      "@babel/preset-typescript",
      {
        corejs: 3,
        useBuiltIns: "usage",
      },
    ],
  ],
};
