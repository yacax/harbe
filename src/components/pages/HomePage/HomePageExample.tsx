import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import HomePageCertificateResultImage from './HomePageCertificateImage';
import { useTheme } from '@mui/material';
import HomePageCertificateTemplateImage from './HomePageCertificateTemplateImage';
import CustomCard from '../../@extended/CustomCard';
import HomePageTable from './HomePageTable';

export default function HomePageExample() {
  const theme = useTheme();
  const colorPrimary = theme.palette.primary.main;
  const colorSecondary = theme.palette.secondary.main;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: {
          xs: '0.5rem',
          lg: '1rem',
        },
      }}
    >
      <Typography
        variant="h3"
        component="h3"
        fontSize={{
          xs: '1.5rem',
          sm: '2rem',
          md: '2.5rem',
        }}
      >
        Example
      </Typography>
      <Typography
        variant="h4"
        fontWeight={700}
        fontSize={{ xs: '1rem', sm: '1.5rem', md: '1.8rem' }}
        alignSelf="flex-start"
      >
        Template
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: {
            xs: 'column',
            md: 'row',
          },
          gap: '1rem',
        }}
      >
        <CustomCard
          title="Result"
          subheader="The first cell of column A in the table."
          backgroundColor={colorSecondary}
          ImageComponent={HomePageCertificateResultImage}
          buttonLabel="Download other cool templates!"
        />
        <CustomCard
          title="Template"
          subheader="This is a template of a certificate."
          backgroundColor={colorPrimary}
          ImageComponent={HomePageCertificateTemplateImage}
          buttonLabel="This Template Download"
        />
      </Box>
      <HomePageTable />
    </Box>
  );
}
