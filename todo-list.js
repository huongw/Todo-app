export default class TodoList {
  constructor(todoList) {
    this.todos = [];
    this.nextId = 1;
    this.todoList = todoList;
  }

  addItem(value) {
    this.todos.push({ id: this.nextId, value });
    this.nextId += 1;
  }

  deleteItem(id) {
    const updateTodos = this.todos.filter((todo) => todo.id !== id);

    this.todos = updateTodos;
  }

  getFromLocalStorage() {
    let data = localStorage.getItem("todos");

    if (data) {
      data = JSON.parse(data);
      this.todos = data.todos;
      this.nextId = data.nextId;
    }
  }

  saveToLocalStorage() {
    const data = {
      todos: this.todos,
      nextId: this.nextId,
    };

    localStorage.setItem("todos", JSON.stringify(data));
  }

  renderTodos() {
    this.todoList.innerHTML = this.todos
      .map((todo) => `<li id="${todo.id}" >${todo.value}</li>`)
      .join("");
  }

  initialLoad() {
    this.getFromLocalStorage();
    this.renderTodos(this.todoList);
  }

  delete(id) {
    this.deleteItem(id);
    this.saveToLocalStorage();
    this.renderTodos(this.todoList);
  }

  saveAndReload(todo) {
    this.addItem(todo);
    this.saveToLocalStorage();
    this.renderTodos(this.todoList);
  }
}