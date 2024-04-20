"use client";
import {
  Menu,
  MenuButton,
  MenuItem,
  IconButton,
  MenuList,
} from "@yamada-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faQuestion,
  faLaptop,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        icon={<FontAwesomeIcon icon={faBars} />}
        variant='outline'
      />

      <MenuList>
        <MenuItem icon={<FontAwesomeIcon icon={faPerson} />}>
          プロフィール
        </MenuItem>
        <MenuItem icon={<FontAwesomeIcon icon={faLaptop} />}>
          ハッカソン
        </MenuItem>
        <MenuItem icon={<FontAwesomeIcon icon={faQuestion} />}>Q&A</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default Navbar;
