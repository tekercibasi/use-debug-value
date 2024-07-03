import React from 'react';
import { useSyncExternalStore, useDebugValue } from 'react';
import { todosStore } from '../todoStore.js';

function useTodos() {
  const todos = useSyncExternalStore(todosStore.subscribe, todosStore.getSnapshot);
  useDebugValue(todos, todos => `To-Dos: ${todos.length} items`);
  return todos;
}

export default function TodosApp() {
  const todos = useTodos();

  const handleAddTodo = () => {
    todosStore.addTodo({ id: Date.now(), text: 'Neues To-Do' });
  };

  return (
    <>
      <button onClick={handleAddTodo}>To-Do hinzufügen</button>
      <hr />
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </>
  );
}
