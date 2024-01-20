import { Dispatch, SetStateAction, useContext } from "react";
import { Sidebar } from "react-pro-sidebar";
import MenuName from "../components/MenuName";
import {
  ThemeContext,
  ThemeContextType,
} from "../../../provider/ThemeProvider";

type SidebarMenuTypes = {
  toggled: boolean;
  setToggled: Dispatch<SetStateAction<boolean>>;
  setBroken: Dispatch<SetStateAction<boolean>>;
};

const SidebarMenu = ({ toggled, setToggled, setBroken }: SidebarMenuTypes) => {
  const context = useContext<ThemeContextType | undefined>(ThemeContext);
  const { theme } = context || {};

  return (
    <Sidebar
      toggled={toggled}
      onBackdropClick={() => setToggled(false)}
      onBreakPoint={setBroken}
      breakPoint="md"
      backgroundColor={theme === "light" ? "#464F65" : "#333333"}
      rootStyles={{
        border: "none",
        color: "white",
      }}
    >
      <MenuName />
    </Sidebar>
  );
};

export default SidebarMenu;
