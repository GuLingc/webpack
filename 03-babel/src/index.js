//1.ES6中使用的常量
const message = "I am a message";
console.log(message);
//2.ES6中使用的箭头函数
const foo = () => {
  console.log("I am food");
};
foo()
//3.对象结构
const obj={name:'why',age:18}
const {name,age}=obj
console.log(name,age);
//4.使用字符串中includes方法（es6以后的版本新出的）
const nickname='coderwhy'
console.log(nickname.includes('coder'));
