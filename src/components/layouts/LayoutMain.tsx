import React, { ReactNode } from 'react';
import Container from '@mui/material/Container';
import SimpleSnackbar from '../@extended/SimpleSnackbar';
import Header from '../Header';

interface BasicLayoutProps {
  children: ReactNode;
}

const BasicLayout: React.FC<BasicLayoutProps> = ({ children }) => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        position: 'relative',
        px: { xs: 0, sm: 2, md: 4 },
        minHeight: '100vh',
      }}
    >
      <Header />
      {children}
      <SimpleSnackbar />
    </Container>
  );
};

export default BasicLayout;