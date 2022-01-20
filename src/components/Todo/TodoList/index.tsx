import { observer } from "mobx-react-lite"
import TodoStore, { Todo } from "../../../stores/TodoStore"

import styles from './todoList.module.css';

interface TodoListProps {
  todos: TodoStore;
}

export const TodoList = observer(({ todos }: TodoListProps) => {

  const handleToggleTodo = (todo: Todo) => () => {
    todos.toggle(todo);
  }
  const handleRemoveTodo = (todo: Todo) => () => {
    todos.remove(todo);
  }

  return (
    <ul className={styles.todoList}>
      {
        todos.list.map((todo) => (
          <li key={todo.id}>
            <label htmlFor={String(todo.id)} className={todo.isDone ? styles.done : ""}>{todo.title}</label>

            <button onClick={handleRemoveTodo(todo)} className={[styles.remove, todo.isDone && styles.done].join(" ")}>
              remove
            </button>

            <button onClick={handleToggleTodo(todo)} >
              <input type="checkbox" id={String(todo.id)} readOnly tabIndex={-1} />
            </button>
          </li>
        ))
      }
    </ul>
  )
})