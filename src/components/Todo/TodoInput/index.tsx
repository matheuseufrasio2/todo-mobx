import { FormEvent } from "react";
import { useStore } from "../../../stores";

import styles from "./todoInput.module.css";

export const TodoInput = () => {
  const { todos } = useStore()

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