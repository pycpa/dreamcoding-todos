import { BiTrashAlt } from "react-icons/bi";
import styles from "./TodoItem.module.css";

export type Todo = {
  id: string;
  text: string;
  status: "completed" | "active";
};

type TodoProsp = {
  todo: Todo;
  onUpdate: (todo: Todo) => void;
  onDelete: (todo: Todo) => void;
};

export default function TodoItem({ todo, onUpdate, onDelete }: TodoProsp) {
  const handleUpdate = () =>
    onUpdate({
      ...todo,
      status: todo.status === "active" ? "completed" : "active",
    });
  const handleDelete = () => onDelete(todo);
  return (
    <li className={styles.todo}>
      <input
        type="checkbox"
        id={todo.id}
        checked={todo.status === "completed"}
        onChange={handleUpdate}
        className={styles.checkbox}
      />
      <label htmlFor={todo.id} className={styles.text}>
        {todo.text}
      </label>
      <span className={styles.icon}>
        <button onClick={handleDelete} className={styles.button}>
          <BiTrashAlt size={20} />
        </button>
      </span>
    </li>
  );
}
