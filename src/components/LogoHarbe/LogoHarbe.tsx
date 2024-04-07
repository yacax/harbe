import React from 'react';
import './LogoHarbe.scss';
import { Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const LogoTestMakerPng: React.FC = () => {
  return (
    <Button component={RouterLink} to="/" className="logo-harbe">
      <Box className="logo-harbe__image-background" />
    </Button>
  );
};

export default LogoTestMakerPng;
