export default class TodoList {
  constructor() {
    this.todos = []
    this.id = 1
  }

  addItem(value) {
    let id = this.id
    this.todos.push({id, value})
    id += 1
  }

  deleteItem(id) {
    const updateTodos = this.todos.filter(todo => todo.id !== id);

    this.todos = updateTodos
  }

  setAllData(data) {
    // the empty array within the class now becomes the updated array
    this.todos = data.todos
    // the id of 1 now becomes the updated id 
    this.id = data.id
  }

  getAllData() {
    const data = {};
    data["todos"] = this.todos;
    data["id"] = this.id;
    return data
  }
}