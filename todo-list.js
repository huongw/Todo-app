export default class TodoList {
  constructor() {
    this.todos = []
    this.id = 1
  }

  addItem(value) {
    const id = this.id
    this.todos.push({id, value})
    this.id += 1
  }

  deleteItem(id) {
    const updateTodos = this.todos.filter(todo => todo.id !== id);

    this.todos = updateTodos
  }

  loadFromData(data) {
    // the empty array within the class now becomes the updated array
    this.todos = data.todos
    // the id of 1 now becomes the updated id 
    this.id = data.id
  }

  serialize() {
    const data = {};
    data["todos"] = this.todos;
    data["id"] = this.id;
    return data
  }
}