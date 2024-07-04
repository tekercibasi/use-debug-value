import React, { useState } from 'react'; // Importing React and the useState hook for managing state
import TodoList from './components/TodoList'; // Importing the TodoList component

// Main App component
const App = () => {
  // State for storing the list of to-dos
  const [todos, setTodos] = useState([]);
  // State for storing the current value of the input field
  const [inputValue, setInputValue] = useState('');

  // Function to handle changes in the input field
  const handleInputChange = (e) => {
    setInputValue(e.target.value); // Update the inputValue state with the new input value
  };

  // Function to add a new to-do to the list
  const addTodo = () => {
    if (inputValue.trim()) { // Check if the input is not just spaces
      // Add the new to-do to the todos state
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue(''); // Clear the input field
    }
  };

  // Function to toggle the completed status of a to-do
  const toggleTodo = (index) => {
    // Map through the todos and toggle the completed status of the clicked to-do
    const newTodos = todos.map((todo, i) => 
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos); // Update the todos state with the new list
  };

  // Function to delete a to-do from the list
  const deleteTodo = (index) => {
    // Filter out the to-do to be deleted
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos); // Update the todos state with the new list
  };

  return (
    <>
    <div
      className="input-group mb-3 p-5"
      style={{ backgroundColor : "#FFF" }}

    >
      {/* Input field for adding new to-dos */}
      <input
        className='form-control form-control-lg'
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Add a new todo" // Add this line if not present
      />

      {/* Button to add a new to-do */}
      <button className="btn btn-outline-success" onClick={addTodo}>Add Todo</button>
      {/* Render the TodoList component and pass the necessary props */}
    </div>
    
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      </>
  );
};

export default App; // Exporting the App component
