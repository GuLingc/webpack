import axios from "axios";
const message = "I am a index";
console.log(message);
const foo = () => {
  console.log("I am food");
};
foo();

//使用axios
axios.get("http://123.207.32.32:8000/home/multidata").then((res) => {
  console.log(res);
});
