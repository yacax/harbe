import React from 'react';
import Box from '@mui/material/Box';
import DrawerAppBar from './@extended/DrawerAppBar';

function Header() {
  return (
    <Box
      component="header"
      display="flex"
      justifyContent="center"
      alignContent="center"
      pt={{ xs: 1, md: 0 }}
    >
      <DrawerAppBar />
    </Box>
  );
}

export default Header;
