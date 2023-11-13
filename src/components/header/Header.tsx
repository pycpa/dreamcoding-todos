import { FiSun } from "react-icons/fi";
import styles from "./Header.module.css";
import { useContext } from "react";
import {
  DarkModeContext,
  DarkModeContextType,
} from "../../context/DarkModeContexst";

type HeaderProps = {
  filter: boolean | undefined;
  onChangeFilter: (filter: boolean | undefined) => void;
};

export default function Header({ filter, onChangeFilter }: HeaderProps) {
  const { handleDarkMode } = useContext(DarkModeContext) as DarkModeContextType;

  return (
    <header className={styles.container}>
      <FiSun
        onClick={handleDarkMode}
        color="white"
        size={20}
        className={styles.mode}
      />
      <div>
        <ul className={styles.filter}>
          <li
            className={`${styles.filterItem} ${
              filter === undefined && styles.selectedFilter
            }`}
            onClick={() => onChangeFilter(undefined)}
          >
            All
          </li>
          <li
            className={`${styles.filterItem} ${
              filter === false && styles.selectedFilter
            }`}
            onClick={() => onChangeFilter(false)}
          >
            Active
          </li>
          <li
            className={`${styles.filterItem} ${
              filter === true && styles.selectedFilter
            }`}
            onClick={() => onChangeFilter(true)}
          >
            Completed
          </li>
        </ul>
      </div>
    </header>
  );
}
