import { useState } from 'react';
import './App.css';
import ToDoForm from './components/Todos/ToDoForm';
import ToDoList from './components/Todos/ToDoList';

function App() {

  const [todos, setTodos] = useState([])

  const addTodoHanlder = (text) => {
    setTodos([...todos, text])
  }

  const deleteTodoHandler = (index) => {
    setTodos(todos.filter((_, idx) => idx !== index))
  }

  return (
    <div className="App">
      <h1>Todo App</h1>
      <ToDoForm addTodo={addTodoHanlder}/>
      <ToDoList deleteTodo={deleteTodoHandler} todos={todos}/>
    </div>
  );
}

export default App;
