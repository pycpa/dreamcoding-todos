import { useState } from "react";
import styles from "./AddTodo.module.css";
import { Todo } from "../todoItem/TodoItem";
import { v4 as uuidv4 } from "uuid";

type AddTodoProps = {
  onAdd: (todo: Todo) => void;
};

export default function TodoInput({ onAdd }: AddTodoProps) {
  const [text, setText] = useState("");

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) =>
    setText(event.target.value);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const trimedText = text.trim();
    if (!trimedText) return;
    onAdd({ id: uuidv4(), text: trimedText, status: "active" });
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        className={styles.input}
        placeholder="Add todo"
      />
      <input type="submit" value="Add" className={styles.button} />
    </form>
  );
}
