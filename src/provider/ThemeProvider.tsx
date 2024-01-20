import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";

export type ThemeContextType = {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const presentTheme = localStorage.getItem("we-theme") || "light";

  const [theme, setTheme] = useState<string>(presentTheme);

  useEffect(() => {
    localStorage.setItem("themes", theme);
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.setAttribute("class", theme);
  }, [theme]);

  const contextValue: ThemeContextType = {
    theme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
