import React from 'react';
import LayoutMain from '../../layouts/LayoutMain';
import { Typography } from '@mui/material';

export default function TemplatesPage() {
  return (
    <LayoutMain>
      <Typography variant="h2" component="h2">
        Templates
      </Typography>
      <Typography variant="body1" component="p" sx={{ m: 'auto' }}>
        Page is under construction
      </Typography>
    </LayoutMain>
  );
}
