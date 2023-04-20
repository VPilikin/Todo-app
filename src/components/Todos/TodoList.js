import styles from './TodoList.module.css'
import Todo from './Todo'
import { useState } from 'react'
function TodoList({ todos, deleteTodo }) {
  return (
    <>
      {todos.length ? (
        todos.map((el, index) => {
          return (
            <Todo key={index} index={index} deleteTodo={deleteTodo}>
              {el}
            </Todo>
          )
        })
      ) : (
        <h2>No one todo</h2>
      )}
    </>
  )
}

export default TodoList
