import { Dispatch, SetStateAction } from "react";
import HamburgButton from "../../SidebarMenu/components/HamburgButton";
import GreetingMessage from "../components/GreetingMessage";
import NavbarAvater from "../components/NavbarAvater";
import ThemeButton from "../../../common/ThemeButton/ThemeButton";

const Navbar = ({
  broken,
  toggled,
  setToggled,
}: {
  broken: boolean;
  toggled: boolean;
  setToggled: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <>
      <nav className="flex justify-between items-center p-3 shadow sticky top-0 bg-white">
        <div>
          <HamburgButton
            broken={broken}
            toggled={toggled}
            setToggled={setToggled}
          />
          <GreetingMessage />
        </div>
        <div className="flex items-center space-x-3">
          <ThemeButton />
          <NavbarAvater />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
