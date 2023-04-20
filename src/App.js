import { useState } from 'react'
import './App.css'
import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'
function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todoText) => {
    setTodos([...todos, todoText])
  }
  const deleteTodo = (i) => {
    setTodos(todos.filter((_, index) => i !== index))
  }

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  )
}

export default App
