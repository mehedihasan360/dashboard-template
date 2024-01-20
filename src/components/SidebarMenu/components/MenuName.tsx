import { FaUser } from "react-icons/fa6";
import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import SidebarHeader from "./SidebarHeader";
const MenuName = () => {
  return (
    <Menu
      menuItemStyles={{
        root: {
          fontSize: "12px",
        },
        subMenuContent: {
          backgroundColor: "transparent",
        },
        button: {
          "&:hover": {
            backgroundColor: "#262626",
          },
        },
        label: ({ open }) => ({
          fontWeight: open ? 600 : 400,
        }),
      }}
      className="flex flex-col h-full fixed overflow-y-scroll w-[15.6rem] sidebar-menu"
    >
      <SidebarHeader />
      <MenuItem icon={<FaUser />} component={<Link to="shop" />}>
        Shop
      </MenuItem>

      <SubMenu icon={<FaUser />} label="Shop">
        <MenuItem icon={<FaUser />} component={<Link to="shop" />}>
          Shop
        </MenuItem>
      </SubMenu>
      <MenuItem icon={<FaUser />} component={<Link to="shop" />}>
        Shop
      </MenuItem>

      <SubMenu icon={<FaUser />} label="Shop">
        <MenuItem icon={<FaUser />} component={<Link to="shop" />}>
          Shop
        </MenuItem>
      </SubMenu>
      <MenuItem icon={<FaUser />} component={<Link to="shop" />}>
        Shop
      </MenuItem>

      <SubMenu icon={<FaUser />} label="Shop">
        <MenuItem icon={<FaUser />} component={<Link to="shop" />}>
          Shop
        </MenuItem>
      </SubMenu>
      <MenuItem icon={<FaUser />} component={<Link to="shop" />}>
        Shop
      </MenuItem>

      <SubMenu icon={<FaUser />} label="Shop">
        <MenuItem icon={<FaUser />} component={<Link to="shop" />}>
          Shop
        </MenuItem>
      </SubMenu>
      <MenuItem icon={<FaUser />} component={<Link to="shop" />}>
        Shop
      </MenuItem>

      <SubMenu icon={<FaUser />} label="Shop">
        <MenuItem icon={<FaUser />} component={<Link to="shop" />}>
          Shop
        </MenuItem>
      </SubMenu>
      <MenuItem icon={<FaUser />} component={<Link to="shop" />}>
        Shop
      </MenuItem>

      <SubMenu icon={<FaUser />} label="Shop">
        <MenuItem icon={<FaUser />} component={<Link to="shop" />}>
          Shop
        </MenuItem>
      </SubMenu>
      <MenuItem icon={<FaUser />} component={<Link to="shop" />}>
        Shop
      </MenuItem>

      <SubMenu icon={<FaUser />} label="Shop">
        <MenuItem icon={<FaUser />} component={<Link to="shop" />}>
          Shop
        </MenuItem>
      </SubMenu>
      <MenuItem icon={<FaUser />} component={<Link to="shop" />}>
        Shop
      </MenuItem>

      <SubMenu icon={<FaUser />} label="Shop">
        <MenuItem icon={<FaUser />} component={<Link to="shop" />}>
          Shop
        </MenuItem>
      </SubMenu>
      <MenuItem icon={<FaUser />} component={<Link to="shop" />}>
        Shop
      </MenuItem>

      <SubMenu icon={<FaUser />} label="Shop">
        <MenuItem icon={<FaUser />} component={<Link to="shop" />}>
          Shop
        </MenuItem>
      </SubMenu>
      <MenuItem icon={<FaUser />} component={<Link to="shop" />}>
        Shop
      </MenuItem>

      <SubMenu icon={<FaUser />} label="Shop">
        <MenuItem icon={<FaUser />} component={<Link to="shop" />}>
          Shop
        </MenuItem>
      </SubMenu>
      <MenuItem icon={<FaUser />} component={<Link to="shop" />}>
        Shop
      </MenuItem>

      <SubMenu icon={<FaUser />} label="Shop">
        <MenuItem icon={<FaUser />} component={<Link to="shop" />}>
          Shop
        </MenuItem>
      </SubMenu>
      <MenuItem icon={<FaUser />} component={<Link to="shop" />}>
        Shop
      </MenuItem>

      <SubMenu icon={<FaUser />} label="Shop">
        <MenuItem icon={<FaUser />} component={<Link to="shop" />}>
          Shop
        </MenuItem>
      </SubMenu>
      <MenuItem icon={<FaUser />} component={<Link to="shop" />}>
        Shop
      </MenuItem>

      <SubMenu icon={<FaUser />} label="Shop">
        <MenuItem icon={<FaUser />} component={<Link to="shop" />}>
          Shop
        </MenuItem>
      </SubMenu>
      <MenuItem icon={<FaUser />} component={<Link to="shop" />}>
        Shop
      </MenuItem>

      <SubMenu icon={<FaUser />} label="Shop">
        <MenuItem icon={<FaUser />} component={<Link to="shop" />}>
          Shop
        </MenuItem>
      </SubMenu>
    </Menu>
  );
};

export default MenuName;
