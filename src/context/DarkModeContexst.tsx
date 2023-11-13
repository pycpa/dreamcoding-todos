import { createContext, useState } from "react";

type DarkModeProviderProps = {
  children: React.ReactNode;
};

export type DarkModeContextType = {
  darkMode: boolean;
  handleDarkMode: () => void;
};

export const DarkModeContext = createContext<DarkModeContextType | null>(null);

export default function DarkModeProvider({ children }: DarkModeProviderProps) {
  const [darkMode, setDarkMode] = useState(false);
  const handleDarkMode = () => setDarkMode((prev) => !prev);
  return (
    <DarkModeContext.Provider value={{ darkMode, handleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}
