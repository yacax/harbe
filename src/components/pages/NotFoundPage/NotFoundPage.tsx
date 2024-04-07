import React from 'react';
import LayoutMain from '../../layouts/LayoutMain';
import { Typography, Button, Box } from '@mui/material';

export default function NotFoundPage() {
  return (
    <LayoutMain>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="80vh"
        textAlign="center"
        gap={7}
      >
        <Typography variant="h2" gutterBottom>
          404
        </Typography>
        <Typography variant="h4" gutterBottom>
          Oops! Page Not Found.
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          We&#160;can&#39;t seem to&#160;find the page you&#39;re looking for.
          It&#160;might have been moved or&#160;deleted.
        </Typography>
        <Button variant="contained" color="primary" href="/">
          Go to Homepage
        </Button>
      </Box>
    </LayoutMain>
  );
}
