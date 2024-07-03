const todos = [];
let listeners = [];

export const todosStore = {
  subscribe: (callback) => {
    listeners.push(callback);
    return () => {
      listeners = listeners.filter(listener => listener !== callback);
    };
  },
  getSnapshot: () => todos,
  addTodo: (todo) => {
    todos.push(todo);
    listeners.forEach(listener => listener());
  }
};
