import { ChangeEvent, useState } from "react";
import TodoStore from "../../../stores/TodoStore";

import styles from "./todoInput.module.css";

interface TodoListProps {
  todos: TodoStore;
}

export const TodoInput = ({ todos }: TodoListProps) => {
  const [newTodo, setNewTodo] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  }

  const handleButtonClick = () => {
    todos.add(newTodo);
    setNewTodo("");
  }

  return (
    <div className={styles.todoInputGroup}>
      <input type="text" value={newTodo} onChange={handleInputChange} />
      <button
        onClick={handleButtonClick}
      >
        Add todo
      </button>
    </div>
  );
}