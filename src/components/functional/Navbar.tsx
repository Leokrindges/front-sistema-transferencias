import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import { useState } from "react";
import ModalTransfer from "./Modal";

export default function Navbar() {
  const [modalCreate, setModalCreate] = useState(false);

  const openModal = () => {
    setModalCreate(true);
  };

  const closeModal = () => {
    setModalCreate(false);
  };

  return (
    <Box sx={{ flexGrow: 3 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Sistema de transferências
          </Typography>
          <Button color="inherit" onClick={openModal}>
            Nova Transferência
          </Button>
          <Typography paddingLeft={3} color="inherit">R$ 100,00</Typography>
        </Toolbar>
      </AppBar>
      <ModalTransfer isOpen={modalCreate} onClose={closeModal} />
    </Box>
  );
}
