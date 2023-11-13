import { useState } from "react";
import styles from "./TodoInput.module.css";

type TodoInputProps = {
  onSubmit: (todo: string) => void;
};

export default function TodoInput({ onSubmit }: TodoInputProps) {
  const [todo, setTodo] = useState("");

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    onSubmit(todo);
    setTodo("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <input
        type="text"
        value={todo}
        onChange={(event) => setTodo(event.target.value)}
        className={styles.todoInput}
      />
      <input type="button" value="Add" className={styles.todoButton} />
    </form>
  );
}
