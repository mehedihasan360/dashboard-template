import { useContext } from "react";
import { FaRegMoon, FaSun } from "react-icons/fa6";
import { ThemeContext, ThemeContextType } from "../../provider/ThemeProvider";

const ThemeButton = () => {
  const context = useContext<ThemeContextType | undefined>(ThemeContext);
  const { theme = "light", setTheme = () => {} } = context || {};

  const handleThemeChange = () => {
    setTheme((prevTheme: string) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <button
      onClick={handleThemeChange}
      className="w-10 h-10 rounded-full overflow-hidden border grid place-items-center"
    >
      {theme === "light" ? <FaRegMoon /> : <FaSun />}
    </button>
  );
};

export default ThemeButton;
