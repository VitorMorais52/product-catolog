import Drawer from "@mui/material/Drawer";
import { useState } from "react";

//stylesheets
import { Container } from "./styles";

type MenuProps = {
  isOpen: boolean;
  requestClose: () => void;
};

function Menu({ isOpen, requestClose }: MenuProps) {
  return (
    <Drawer open={isOpen} onClose={requestClose}>
      <Container>Menu</Container>
    </Drawer>
  );
}

export default Menu;
