import DarkModeProvider from "../context/DarkModeContexst";
import Todos from "./todos/Todos";

export default function App() {
  return (
    <DarkModeProvider>
      <Todos />
    </DarkModeProvider>
  );
}
