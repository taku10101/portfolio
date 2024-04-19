"use client";
import {
  useDisclosure,
  Button,
  Collapse,
  FocusLock,
  VStack,
  Input,
  Box,
} from "@yamada-ui/react";
import React from "react";

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box onMouseEnter={() => onToggle()} onMouseLeave={() => onToggle()}>
      Hover me
      <Collapse isOpen={isOpen}>
        <FocusLock>
          <VStack py='md' h={400}>
            <Input placeholder='This is Input' />

            <Button alignSelf='center'>Button</Button>
          </VStack>
        </FocusLock>
      </Collapse>
    </Box>
  );
};

export default Navbar;
