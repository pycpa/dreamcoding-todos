import { BiTrashAlt } from "react-icons/bi";
import styles from "./TodoItem.module.css";

export type Todo = {
  id: string;
  todo: string;
  done: boolean;
};

type TodoProsp = {
  todo: Todo;
  onToggleClick: () => void;
  onDeleteClick: () => void;
};

export default function TodoItem({
  todo,
  onToggleClick,
  onDeleteClick,
}: TodoProsp) {
  return (
    <article className={styles.container}>
      <div>
        <input
          type="checkbox"
          id={todo.id}
          checked={todo.done}
          onChange={onToggleClick}
        />
        <label htmlFor={todo.id} className={todo.done ? styles.todoDone : ""}>
          {todo.todo}
        </label>
      </div>
      <BiTrashAlt size={20} onClick={onDeleteClick} />
    </article>
  );
}
