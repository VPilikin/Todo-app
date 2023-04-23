import styles from './TodosActions.module.css'
import Button from '../UI/Button'
import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'

function TodosActions({ resetTodos, clearCompletedTodos, ifCompletedTodos }) {
  return (
    <>
      <Button title="Reset todos" onClick={resetTodos}>
        <RiRefreshLine />
      </Button>
      <Button
        title="Clear completed todos"
        onClick={clearCompletedTodos}
        disabled={!ifCompletedTodos}
      >
        <RiDeleteBin2Line />
      </Button>
    </>
  )
}

export default TodosActions
