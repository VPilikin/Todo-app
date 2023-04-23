import styles from './Todo.module.css'
import { RiDeleteBin2Line, RiTodoFill } from 'react-icons/ri'
import { FaCheck } from 'react-icons/fa'

function Todo({ todo, deleteTodo, checkTodo }) {
  return (
    <div
      className={`${styles.todo} ${todo.isCompleted ? styles.completed : ''}`}
    >
      <RiTodoFill className={styles.icon} />
      <p
        className={`${styles.todoText} ${
          todo.isCompleted ? styles.completed : ''
        }`}
      >
        {todo.text}
      </p>
      <RiDeleteBin2Line
        className={styles.delete}
        onClick={() => deleteTodo(todo.id)}
      />
      <FaCheck className={styles.check} onClick={() => checkTodo(todo.id)} />
    </div>
  )
}

export default Todo
