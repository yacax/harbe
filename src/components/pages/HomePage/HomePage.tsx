import React from 'react';
import Typography from '@mui/material/Typography';
import LayoutMain from '../../layouts/LayoutMain';
import HomePageFilesForm from './HomePageFilesForm';
import HomePageExample from './HomePageExample';
import { Box } from '@mui/material';

export default function HomePage() {
  return (
    <LayoutMain>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: {
            xs: '1rem',
            md: '2rem',
          },
        }}
      >
        <Typography
          variant="h1"
          component="h1"
          gutterBottom
          sx={{
            fontSize: {
              xs: '2rem',
              sm: '2.5rem',
              md: '3rem',
              lg: '3.5rem',
              xl: '4rem',
            },
          }}
        >
          Create your own set of&#160;files!
        </Typography>
        <HomePageFilesForm />
        <HomePageExample />
      </Box>
    </LayoutMain>
  );
}
