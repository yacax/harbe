import React from 'react';
import { Typography } from '@mui/material';
import CustomExcelTable from '../../@extended/CustomExcelTable';

function HomePageTable() {
  return (
    <>
      <Typography
        variant="h4"
        fontWeight={700}
        fontSize={{ xs: '1rem', sm: '1.5rem', md: '1.8rem' }}
        alignSelf="flex-start"
        mt={{
          xs: '1rem',
          sm: '1.5rem',
          md: '2rem',
        }}
      >
        Table
      </Typography>
      <Typography
        variant="body1"
        fontSize={{ xs: '1rem', sm: '1.2rem', md: '1.4rem' }}
      >
        This example showcases a&#160;simple, Excel-style table. Simply upload
        an&#160;Excel document, and you can effortlessly pull data from any
        specified column into your template. Our system allows for
        an&#160;unlimited number of&#160;columns. To&#160;incorporate specific
        data from a&#160;column into your template, just place the column letter
        inside curly braces, like {'{A}'}, {'{B}'}, {'{C}'}, etc. It&apos;s
        user-friendly and highly adaptable!
      </Typography>
      <CustomExcelTable />
    </>
  );
}

export default HomePageTable;
