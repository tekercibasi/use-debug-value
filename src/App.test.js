import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';



describe('Test ToDoApp', () => {
  let todoItem;

  beforeEach(() => {
    render(<App />);
    let toDoListButton = screen.getByText('toDoList');
    fireEvent.click(toDoListButton);
    let AddToDoButton = screen.getByText(/Add Todo/i);
    let inputElement = screen.getByPlaceholderText(/Add a new todo/i);
    // Simulate user typing a new todo
    fireEvent.change(inputElement, { target: { value: 'New Todo' } });
    fireEvent.click(AddToDoButton);
    todoItem = screen.getByText(/New Todo/i);
  });
  
  
  test('Checks if toDoItems can be added', () => {
    // Check if the new todo is in the document
    let todoItem = screen.getByText(/New Todo/i);
    expect(todoItem).toBeInTheDocument();
  })
  
  test('Checks if toDoItems cann be deleted', () => {
     // Check if the new todo is deletable
    let todoItem = screen.getByText(/New Todo/i);
    let deleteButton = screen.getByText(/Delete/i);
    fireEvent.click(deleteButton);
    expect(todoItem).not.toBeInTheDocument();

  })

});