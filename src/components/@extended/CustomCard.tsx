import React from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
} from '@mui/material';

type CardProps = {
  title: string;
  subheader: string;
  backgroundColor: string;
  ImageComponent: React.ElementType;
  buttonLabel: string;
};

const CustomCard: React.FC<CardProps> = ({
  title,
  subheader,
  backgroundColor,
  ImageComponent,
  buttonLabel,
}) => {
  return (
    <Card
      sx={{
        width: '100%',
        height: '100%',
        overflow: 'hidden',
      }}
    >
      <CardHeader
        title={title}
        subheader={subheader}
        sx={{ backgroundColor: backgroundColor, color: 'white' }}
        subheaderTypographyProps={{ style: { color: 'white' } }}
      />
      <CardContent>
        <ImageComponent />
      </CardContent>
      <CardActions sx={{ justifyContent: 'flex-end' }}>
        <Button size="small" variant="text">
          {buttonLabel}
        </Button>
      </CardActions>
    </Card>
  );
};

export default CustomCard;
