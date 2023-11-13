import { HiSun, HiMoon } from "react-icons/hi";
import styles from "./Header.module.css";
import { FILTERS, filters } from "../App";
import { useDarkMode } from "../../context/DarkModeContext";

type HeaderProps = {
  filters: typeof filters;
  filter: FILTERS;
  onChangeFilter: React.Dispatch<React.SetStateAction<FILTERS>>;
};

export default function Header({
  filters,
  filter,
  onChangeFilter,
}: HeaderProps) {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className={styles.header}>
      <button onClick={toggleDarkMode} className={styles.toggle}>
        {darkMode && <HiMoon />}
        {!darkMode && <HiSun />}
      </button>
      <div>
        <ul className={styles.filters}>
          {filters.map((value, index) => (
            <li key={index}>
              <button
                onClick={() => onChangeFilter(value)}
                className={`${styles.filter} ${
                  value === filter && styles.selected
                }`}
              >
                {value}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
