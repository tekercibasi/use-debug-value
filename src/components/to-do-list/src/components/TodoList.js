import React from 'react'; // Importing React library
import TodoItem from './TodoItem'; // Importing the TodoItem component

// TodoList component to display the list of to-dos
const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul className='list-group'>
      {/* Loop through the todos array and render a TodoItem for each */}
      {todos.map((todo, index) => (
        <TodoItem
          key={index} // Unique key for each to-do item
          todo={todo} // The to-do item data
          index={index} // The index of the to-do item
          toggleTodo={toggleTodo} // Function to toggle the to-do
          deleteTodo={deleteTodo} // Function to delete the to-do
        />
      ))}
    </ul>
  );
};

export default TodoList; // Exporting the TodoList component
