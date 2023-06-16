const app = Vue.createApp({
  data: () => ({
    newItem: "",
    todos: [],
  }),
  methods: {
    addItem: function (e) {
      if (this.newItem === "") return;
      let todo = {
        item: this.newItem,
        isDone: false,
      };
      this.todos.push(todo);
      this.newItem = "";
    },
    deleteItem: function (index) {
      this.todos.splice(index, 1);
    },
  },
});
app.component("todo-title", {
  template: "<h1>Todo List</h1>",
});
app.mount("#app");
