import * as React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LogoHarbe from '../LogoHarbe/LogoHarbe';
import { NAVIGATION_ITEMS, GUI_FEATURES } from '../../utils/config';

export default function DrawerAppBar() {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const location = useLocation();

  const handleDrawerToggle = () => {
    setIsDrawerOpen((prevState) => !prevState);
  };

  const getPath = (path: string) =>
    path === 'Home' ? '/' : `/${path.toLowerCase()}`;
  const isActive = (path: string) => location.pathname === getPath(path);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        HARBE
      </Typography>
      <Divider />
      <List>
        {NAVIGATION_ITEMS.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{
                textAlign: 'center',
                backgroundColor: isActive(item) ? '#f0f0f0' : 'transparent',
              }}
              component={RouterLink}
              to={getPath(item)}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav">
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <LogoHarbe />
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 0, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, ml: 2 }}
          >
            HARBE
          </Typography>

          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {NAVIGATION_ITEMS.map((item) => (
              <Button
                key={item}
                variant="text"
                color="inherit"
                sx={{
                  borderBottom: isActive(item) ? '2px solid #fff' : 'none',
                  borderRadius: 0,
                }}
                component={RouterLink}
                to={getPath(item)}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={isDrawerOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: GUI_FEATURES.DRAWER_WIDTH,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Toolbar />
    </Box>
  );
}
