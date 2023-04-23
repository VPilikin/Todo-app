import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './App.css'
import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'
import TodosActions from './components/Todos/TodosActions'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (text) => {
    const newTodo = {
      text,
      isCompleted: false,
      id: uuidv4(),
    }
    setTodos([...todos, newTodo])
  }
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const checkTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      })
    )
  }

  const resetTodos = () => {
    setTodos([])
  }

  const clearCompletedTodos = () => {
    setTodos(todos.filter((todo) => todo.isCompleted === false))
  }

  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length
  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodo} />
      {todos.length !== 0 && (
        <TodosActions
          resetTodos={resetTodos}
          clearCompletedTodos={clearCompletedTodos}
          ifCompletedTodos={!!completedTodosCount}
        />
      )}
      <TodoList todos={todos} deleteTodo={deleteTodo} checkTodo={checkTodo} />
      {completedTodosCount !== 0 && (
        <h1>
          You have completed {completedTodosCount}{' '}
          {completedTodosCount > 1 ? 'todos' : 'todo'}
        </h1>
      )}
    </div>
  )
}

export default App
