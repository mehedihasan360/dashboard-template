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

const themeName: string = "themes";

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const presentTheme = localStorage.getItem(themeName) || "light";

  const [theme, setTheme] = useState<string>(presentTheme);

  useEffect(() => {
    localStorage.setItem(themeName, theme);
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
