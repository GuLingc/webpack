//导入写好的文件,直接导入全部的文件，性能不好
// import './router/about'
// import './router/category'

const message = "I am a index";
console.log(message);
const foo = () => {
  console.log("I am food");
};
foo();

const btn1 = document.createElement("button");
const btn2 = document.createElement("button");
btn1.textContent = "关于";
btn2.textContent = "分类";
document.body.append(btn1);
document.body.append(btn2);
//动态导入，符合某一条件的时候再下载对应的文件
//利用的懒加载
btn1.onclick = function () {
  //自定义生成的包文件命名，注意：注释的样式不能更改/* webpackChunkName: 自定义的名字 */,它会覆盖再webpack.config.js中生成的命名
  import(/* webpackChunkName: "about" */"./router/about").then((res) => {
    res.about();
    res.default;
  });
};
btn2.onclick = function () {
  import(/* webpackChunkName: "category" */"./router/category");
};
