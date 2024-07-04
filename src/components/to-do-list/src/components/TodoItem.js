import React from 'react'; // Importing React library

// TodoItem component to represent a single to-do item
const TodoItem = ({ todo, index, toggleTodo, deleteTodo }) => {
  return (
    <li className='d-flex justify-content-between list-group-item list-group-item-primary'>
      {/* Span element to display the to-do text and toggle its completed status */}
      <span
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }} // Line-through if completed
        onClick={() => toggleTodo(index)} // Toggle the to-do on click
      >
        {todo.text}
      </span>
      {/* Button to delete the to-do */}
      <button className="btn btn-danger" onClick={() => deleteTodo(index)}>Delete</button>
    </li>
  );
};

export default TodoItem; // Exporting the TodoItem component
