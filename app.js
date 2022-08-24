import TodoList from "./todo-list.js";

const form = document.querySelector(".todo-form");
const todoList = document.querySelector(".todo-list");
const todoManager = new TodoList(todoList);

todoManager.initialLoad();

todoList.addEventListener("click", (e) => {
  todoManager.delete(parseInt(e.target.id));
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = document.querySelector("input");
  
  if (!input.value) return alert("Add a task first!");
  todoManager.saveAndReload(input.value);
  input.value = "";
});