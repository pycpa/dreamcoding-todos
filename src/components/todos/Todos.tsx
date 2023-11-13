import { useContext, useState, useEffect } from "react";

import {
  DarkModeContext,
  DarkModeContextType,
} from "../../context/DarkModeContexst";
import TodoItem, { Todo } from "../todo/TodoItem";
import styles from "./Todos.module.css";
import Header from "../header/Header";
import TodoInput from "../todoInput.tsx/TodoInput";

// https://github.com/Quramy/typed-css-modules

export default function Todos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const localTodos = localStorage.getItem("todos");
    console.log("item 가져오기", localTodos);
    if (localTodos) {
      setTodos(JSON.parse(localTodos));
    }
  }, []);

  useEffect(() => {
    console.log("item 저장하기");
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (todo: string) => {
    setTodos((prev) => [
      ...prev,
      { id: Date.now().toString(), todo, done: false },
    ]);
  };

  const handleDeleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleToggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const handleFitlerChanged = (filter: boolean | undefined) => {
    setFilter(filter);
  };

  const { darkMode } = useContext(DarkModeContext) as DarkModeContextType;

  const filterdTodos =
    filter === undefined ? todos : todos.filter((todo) => todo.done === filter);

  return (
    <div
      className={`${styles.container} ${
        darkMode ? styles.darkMode : styles.whiteMode
      }`}
    >
      <Header filter={filter} onChangeFilter={handleFitlerChanged} />
      <main className="main">
        <ul>
          {filterdTodos.map((todo) => (
            <li key={todo.id}>
              <TodoItem
                todo={todo}
                onToggleClick={() => handleToggleTodo(todo.id)}
                onDeleteClick={() => handleDeleteTodo(todo.id)}
              />
            </li>
          ))}
        </ul>
      </main>
      <TodoInput onSubmit={handleAddTodo} />
    </div>
  );
}
