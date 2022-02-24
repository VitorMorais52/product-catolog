import Drawer from "@mui/material/Drawer";
import { useState } from "react";

import { Container } from "./styles";

type MenuProps = {
  isOpen: boolean;
  requestClose: () => void;
};

function Menu({ isOpen, requestClose }: MenuProps) {
  return (
    <Drawer open={isOpen} onClose={requestClose} anchor="right">
      <Container>Menu Cart</Container>
    </Drawer>
  );
}

export default Menu;
