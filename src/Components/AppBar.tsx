import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import TodoDialog from "../Shared/TodoDialog";

const navItems = [
  {
    label: "Create Task",
    whatToDo: (arg: () => void): void => {
      arg();
    },
  },
];

function TopBar(): React.JSX.Element {
  interface DialogHandlerState {
    isOpen: boolean;
    openDialog: () => void;
    closeDialog: () => void;
    taskName: string;
  }

  const [mobileOpen, setMobileOpen] = React.useState<boolean>(false);
  const [dialogHandlerState, setDialogHandleState] =
    useState<DialogHandlerState>({
      isOpen: false,
      openDialog: (): void => {
        setDialogHandleState((prev) => ({ ...prev, isOpen: true }));
      },
      closeDialog: (): void => {
        setDialogHandleState((prev) => ({ ...prev, isOpen: false }));
      },
      taskName: "",
    });

  const handleForm = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    let {
      target: { value },
    } = event;
    setDialogHandleState((prev) => ({ ...prev, taskName: value }));
  };

  const store = (): void => {};

  const handleDrawerToggle = (): void => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        TODO
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={(): void => {
                item.whatToDo(dialogHandlerState.openDialog);
              }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <TodoDialog
        isOpen={dialogHandlerState.isOpen}
        action={<Button onClick={store}>Create</Button>}
        handleCancel={dialogHandlerState.closeDialog}
        handleTask={handleForm}
      />
      <AppBar component={"nav"} sx={{ backgroundColor: "black" }}>
        <Toolbar sx={{ minHeight: 60 }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "block", sm: "flex" },
              alignItems: { xs: "center", sm: "flex-start" },
            }}
          >
            TODO
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                sx={{
                  color: "#fff",
                  border: "1px solid white",
                  borderRadius: "20px",
                }}
                onClick={(): void => {
                  item.whatToDo(dialogHandlerState.openDialog);
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <nav style={{ backgroundColor: "black" }}>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 240,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default TopBar;
