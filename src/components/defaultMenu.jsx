import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText, Divider, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';

export const DefaultMenu = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));  // Detecta se é mobile

  // Função para abrir e fechar o Drawer (menu lateral)
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      {/* AppBar fixa no topo */}
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={toggleDrawer} sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Menu Responsivo</Typography>
        </Toolbar>
      </AppBar>

      {/* Menu lateral (Drawer) para telas pequenas */}
      <Drawer
        sx={{
          width: 250,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 250,
            boxSizing: 'border-box',
          },
        }}
        anchor="left"
        open={open}
        onClose={toggleDrawer}
      >
        <List>
          <ListItem button>
            <ListItemText primary="Página Inicial" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Sobre" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Serviços" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Contato" />
          </ListItem>
        </List>
        <Divider />
      </Drawer>

      {/* Conteúdo principal, ajustado para a tela */}
      <main style={{ marginTop: 64 }}>
        <Typography variant="h4" gutterBottom>
          Bem-vindo ao nosso site!
        </Typography>
        <Typography variant="body1">
          Aqui você pode adicionar o conteúdo da sua aplicação.
        </Typography>
      </main>
    </>
  );
};
