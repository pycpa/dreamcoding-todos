import { useState, useEffect } from "react";

import TodoItem, { Todo } from "../todoItem/TodoItem";
import styles from "./TodoList.module.css";
import TodoInput from "../addTodo/AddTodo";
import { FILTERS } from "../App";

// https://github.com/Quramy/typed-css-modules

type TodoProps = {
  filter: FILTERS;
};

export default function TodoList({ filter }: TodoProps) {
  // useState에는 초기값을 바로 전달할 수도 있으며
  // 함수를 전달할 수 있음
  // 함수를 전달하면, 그 함수를 한번만 호출함...
  // 그렇다고, 함수를 실행한 값을 전달하면, 매번 그 함수를 호출하게 됨
  // 왜냐하면, 함수형 컴포넌트는 렌더링 될 때 다시 실행되고
  // 그때마다 useState(readTodoFromLocalStorage())가 실행되면서,
  // readTodoFromLocalStorage()가 실행되기 때문임.
  // 그렇다고 하더라도, 내부적오로 useState에 의해 정의된 값이 있기 때문에
  // 컴퍼넌트가 다시 렌더링 되지는 않음
  const [todos, setTodos] = useState<Todo[]>(readTodoFromLocalStorage);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAdd = (todo: Todo) => setTodos((prev) => [...prev, todo]);

  const handleUpdate = (updatedTodo: Todo) =>
    setTodos((prev) =>
      prev.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
    );

  const handleDelete = (deletedTodo: Todo) =>
    setTodos((prev) => prev.filter((todo) => todo.id !== deletedTodo.id));

  const filterdTodos = filterTodos(todos, filter);

  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {filterdTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <TodoInput onAdd={handleAdd} />
    </section>
  );
}

function filterTodos(todos: Todo[], filter: FILTERS) {
  if (filter === "all") {
    return todos;
  } else {
    return todos.filter((todo) => todo.status === filter);
  }
}

function readTodoFromLocalStorage() {
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];
}
