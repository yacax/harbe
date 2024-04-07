import React from 'react';
import { Typography, Paper } from '@mui/material';
import LayoutMain from '../../layouts/LayoutMain';

export default function AboutPage() {
  return (
    <LayoutMain>
      <Paper elevation={3} sx={{ padding: '2rem', marginTop: '2rem' }}>
        <Typography variant="h4" gutterBottom>
          About the App
        </Typography>
        <Typography variant="body1" paragraph>
          This application is&#160;designed to&#160;streamline the process
          of&#160;generating multiple files with variable data. It&#160;allows
          users to&#160;upload any Word document template and specify variable
          data points using column letters from a&#160;corresponding table
          within curly braces. For instance, writing {'{A}'} in&#160;the
          template will substitute this placeholder with data from column{' '}
          {'{A}'} of&#160;your table in&#160;each generated file.
        </Typography>
        <Typography variant="body1" paragraph>
          You can use multiple instances of the same placeholder, such as{' '}
          {'{A}'}, {'{B}'}, {'{C}'}, {'{D}'}, etc., to cater to diverse data
          requirements. Each generated document will uniquely incorporate data
          from each row of your table, ensuring a customized output for every
          file.
        </Typography>
        <Typography variant="body1" paragraph>
          <b>Future Development Plans:</b> We are looking forward to expanding
          the application’s capabilities. Soon, a templates page and
          multi-language support will be added. If you&apos;re interested in
          contributing a template to our website, please feel free to reach out
          to us.
        </Typography>
      </Paper>
    </LayoutMain>
  );
}
