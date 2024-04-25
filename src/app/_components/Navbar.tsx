import {
  Menu,
  MenuButton,
  MenuItem,
  IconButton,
  MenuList,
  Box,
} from "@yamada-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faQuestion,
  faLaptop,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
function Navbar() {
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
          icon={<FontAwesomeIcon icon={faBars} />}
          variant='outline'
        />

        <MenuList>
          <Link href={"/"}>
            <MenuItem icon={<FontAwesomeIcon icon={faPerson} />}>
              プロフィール
            </MenuItem>
          </Link>

          <Link href='/performance'>
            <MenuItem icon={<FontAwesomeIcon icon={faLaptop} />}>
              ハッカソン
            </MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </Box>
  );
}

export default Navbar;
