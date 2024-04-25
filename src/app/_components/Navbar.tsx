import {
  Menu,
  MenuButton,
  MenuItem,
  IconButton,
  MenuList,
  Box,
} from "@yamada-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptop, faPerson } from "@fortawesome/free-solid-svg-icons";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";

const Navbar = async () => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        m: 4,
      }}
    >
      <Menu>
        <MenuButton
          as={IconButton}
          icon={<RxHamburgerMenu />}
          variant='outline'
        />

        <MenuList>
          <Link href={"/"}>
            <MenuItem>プロフィール</MenuItem>
          </Link>

          <Link href='/performance'>
            <MenuItem>ハッカソン</MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default Navbar;
