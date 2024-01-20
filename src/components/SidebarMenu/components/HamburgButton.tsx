import { Dispatch, SetStateAction } from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

type Buttontypes = {
  broken: boolean;
  toggled: boolean;
  setToggled: Dispatch<SetStateAction<boolean>>;
};

const HamburgButton = ({ broken, toggled, setToggled }: Buttontypes) => {
  return (
    <>
      {broken && (
        <button
          onClick={() => setToggled(!toggled)}
          className="w-10 h-10 grid place-items-center rounded-xl bg-gray-200"
        >
          <HiOutlineMenuAlt1 />
        </button>
      )}
    </>
  );
};

export default HamburgButton;
