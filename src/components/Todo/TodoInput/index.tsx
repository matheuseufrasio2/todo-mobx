import { FormEvent } from "react";
import TodoStore from "../../../stores/TodoStore";

import styles from "./todoInput.module.css";

interface TodoListProps {
  todos: TodoStore;
}

export const TodoInput = ({ todos }: TodoListProps) => {

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const formElement = e.target as HTMLFormElement;
    const formData = new FormData(formElement);

    const value = String(formData.get("todo-input") || "");
    todos.add(value);
    formElement.reset();
  }

  return (
    <form onSubmit={handleSubmit} className={styles.todoInputGroup}>
      <input name="todo-input" placeholder="Add todo..." />
      <button type="submit">
        Add todo
      </button>
    </form>
  );
}