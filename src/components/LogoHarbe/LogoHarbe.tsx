import React from 'react';
import './LogoHarbe.scss';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';

const LogoTestMakerPng: React.FC = () => {
  return (
    <Button className="logo-harbe">
      <Box className="logo-harbe__image-background" />
    </Button>
  );
};

export default LogoTestMakerPng;
