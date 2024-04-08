import React, { ReactNode } from 'react';
import Container from '@mui/material/Container';
import SimpleSnackbar from '../@extended/SimpleSnackbar';
import Header from '../Header';
import Footer from '../@extended/Footer';

interface BasicLayoutProps {
  children: ReactNode;
}

const BasicLayout: React.FC<BasicLayoutProps> = ({ children }) => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        px: { xs: 2, sm: 3, md: 4 },
        py: { xs: 2, sm: 3, md: 4 },
      }}
    >
      <Header />
      {children}
      <SimpleSnackbar />
      <div style={{ flexGrow: 1 }}></div>
      <Footer />
    </Container>
  );
};

export default BasicLayout;
