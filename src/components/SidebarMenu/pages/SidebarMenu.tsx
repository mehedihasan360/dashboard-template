import { Dispatch, SetStateAction } from "react";
import { Sidebar } from "react-pro-sidebar";
import MenuName from "../components/MenuName";

type SidebarMenuTypes = {
  toggled: boolean;
  setToggled: Dispatch<SetStateAction<boolean>>;
  setBroken: Dispatch<SetStateAction<boolean>>;
};

const SidebarMenu = ({ toggled, setToggled, setBroken }: SidebarMenuTypes) => {
  return (
    <Sidebar
      toggled={toggled}
      onBackdropClick={() => setToggled(false)}
      onBreakPoint={setBroken}
      breakPoint="md"
      backgroundColor="#464F65"
      rootStyles={{
        border: "none",
      }}
    >
      <MenuName />
    </Sidebar>
  );
};

export default SidebarMenu;
