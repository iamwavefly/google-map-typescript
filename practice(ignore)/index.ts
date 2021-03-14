import axios from 'axios'

interface Todo{
  id: number;
  title: string;
  completed: boolean
}

axios.get("https://jsonplaceholder.typicode.com/todos/2")
.then(res => {
  const todo = res.data as Todo
  const id = todo.id
  const title = todo.title
  const completed = todo.completed

  logTodo(id, title, completed)
})

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    The todo id was ${id}
    and the title was ${title}
    is it completed ${completed}
  `)
}

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

const person: {name: string; age: number; address: string} = {name: "john", age: 12, address: "lekki palace"}

const calcAge = (name: string, age: number, address: string) => {
  console.log (`
    ${name} was ${age} old, and live in ${address}
  `)
}

calcAge(person.name, person.age, person.address)