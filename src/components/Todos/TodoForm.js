import styles from './TodoForm.module.css'
import { useState } from 'react'

function TodoForm({ addTodo }) {
  const [todoText, setTodoText] = useState('')

  const inputChange = (event) => {
    setTodoText(event.target.value)
  }

  const formSubmit = (event) => {
    event.preventDefault()
    if (todoText) {
      addTodo(todoText)
      setTodoText('')
    }
  }

  return (
    <form className={styles.form} onSubmit={formSubmit}>
      <input
        className={styles.input}
        type="text"
        value={todoText}
        onChange={inputChange}
        placeholder="Enter new todo"
      ></input>
      <button className={styles.button} type="submit">
        Submit
      </button>
    </form>
  )
}

export default TodoForm
