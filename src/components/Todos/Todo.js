import styles from './Todo.module.css'

function Todo({ children, index, deleteTodo }) {
  return (
    <div className={styles.todo} onDoubleClick={() => deleteTodo(index)}>
      <p className={styles.todoText}>{children}</p>
    </div>
  )
}

export default Todo
