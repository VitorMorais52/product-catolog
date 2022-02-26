//@mui components
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import AppsIcon from "@mui/icons-material/Apps";

//stylesheets
import { Container } from "./styles";

type MenuProps = {
  isOpen: boolean;
  requestClose: () => void;
};

function Menu({ isOpen, requestClose }: MenuProps) {
  return (
    <Drawer open={isOpen} onClose={requestClose}>
      <Container>
        <List>
          <ListItem button key={"Collections"}>
            <ListItemIcon>
              <CollectionsBookmarkIcon />
            </ListItemIcon>
            <ListItemText primary={"Collections"} />
          </ListItem>

          <Divider />

          <ListItem button key={"Categories"}>
            <ListItemIcon>
              <AppsIcon />
            </ListItemIcon>
            <ListItemText primary={"Categories"} />
          </ListItem>
        </List>
      </Container>
    </Drawer>
  );
}

export default Menu;
