"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
axios_1["default"].get("https://jsonplaceholder.typicode.com/todos/2")
    .then(function (res) {
    var todo = res.data;
    var id = todo.id;
    var title = todo.title;
    var completed = todo.completed;
    logTodo(id, title, completed);
});
var logTodo = function (id, title, completed) {
    console.log("\n    The todo id was " + id + "\n    and the title was " + title + "\n    is it completed " + completed + "\n  ");
};
// class Person (name, age, address) {
//   constructor(name: string, age: string, address: string){
//     this.name = name
//     this.age = age
//     this.address = address
//   }
//   const who = () => {
//     return `name is ${this.name} and his ${this.age} old and live in ${this.address}`
//   }
// }
var person = { name: "john", age: 12, address: "lekki palace" };
var calcAge = function (name, age, address) {
    console.log("\n    " + name + " was " + age + " old, and live in " + address + "\n  ");
};
calcAge(person.name, person.age, person.address);
