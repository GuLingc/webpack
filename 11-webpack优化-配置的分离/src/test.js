const message = "Hello Webpack";
console.log(message);
function foo() {
  console.log("你好，欢迎来到我的世界");
}
foo();
const obj = {
  name: "Nan Yu",
  bar() {
    return "bar";
  },
};

//不可达代码
if (false) {
  console.log("哈哈哈哈哈");
  console.log("呵呵呵呵呵");
}
class Person {}
const p = new Person();
