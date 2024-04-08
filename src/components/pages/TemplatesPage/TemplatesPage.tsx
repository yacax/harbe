import React from 'react';
import LayoutMain from '../../layouts/LayoutMain';
import IntergalacticCertificate from './IntergalacticCertificate';

import { Typography } from '@mui/material';

export default function TemplatesPage() {
  return (
    <LayoutMain>
      <Typography variant="h2" component="h2" gutterBottom>
        Templates
      </Typography>
      <IntergalacticCertificate />
    </LayoutMain>
  );
}
