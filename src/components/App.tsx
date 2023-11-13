import { useState } from "react";

import DarkModeProvider from "../context/DarkModeContext";
import Header from "./header/Header";
import TodoList from "./todoList/TodoList";

export const filters = ["all", "active", "completed"] as const;
export type FILTERS = (typeof filters)[number];

export default function App() {
  const [filter, setFilter] = useState<FILTERS>("all");
  return (
    <DarkModeProvider>
      <Header filters={filters} filter={filter} onChangeFilter={setFilter} />
      <TodoList filter={filter} />
    </DarkModeProvider>
  );
}
