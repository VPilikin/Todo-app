import styles from './TodoList.module.css'
import Todo from './Todo'
import { useState } from 'react'
function TodoList({ todos, deleteTodo, checkTodo }) {
  return (
    <>
      {todos.length ? (
        todos.map((el) => {
          return (
            <Todo
              key={el.id}
              deleteTodo={deleteTodo}
              todo={el}
              checkTodo={checkTodo}
            />
          )
        })
      ) : (
        <h2>No one todo</h2>
      )}
    </>
  )
}

export default TodoList
