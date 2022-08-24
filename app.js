import TodoList from "./todo-list.js";

const form = document.querySelector(".todo-form");
const todoList = document.querySelector(".todo-list");

const todos = new TodoList();
const render = function(items) {

   const itemsArr = items.map(todo => `<li id="${todo.id}" >${todo.value}</li>`).join("");

   todoList.innerHTML = itemsArr
}

const getFromLocalStorage = function() {
  let data = localStorage.getItem("tasks")

  // if data exists inside the local storage
  if (data) {
    // turns the string version of the data object back into an object
    data = JSON.parse(data)
    render(data.todos) // passes render function the array of objects
    todos.loadFromData(data) // calls function and passes data object
  }
}

const addToLocalStorage = function(todos) {
  // stores data into local storage and turns it into a string
  localStorage.setItem("tasks", JSON.stringify(todos))

  // passes render function with the array of objects
  render(todos.todos)
}

todoList.addEventListener("click", (e) => {
  console.log("clicked", e.target.id)
  todos.deleteItem(parseInt(e.target.id))

  addToLocalStorage(todos.serialize())
})

form.addEventListener("submit", (e) => {
  e.preventDefault()
  const input = document.querySelector("input")

  if (!input.value) return alert("Add a task first!")

  // adds input value into an object and that object into an array
  todos.addItem(input.value)

  // data object with an id and key of "todos" and value of an array with objects
  addToLocalStorage(todos.serialize())

  input.value = "";
})

// gets data from local storage
getFromLocalStorage();

