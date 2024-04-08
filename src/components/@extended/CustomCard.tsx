import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
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
  downloadLink?: string;
  navigationLink?: string;
};

const CustomCard: React.FC<CardProps> = ({
  title,
  subheader,
  backgroundColor,
  ImageComponent,
  buttonLabel,
  downloadLink,
  navigationLink,
}) => {
  let ButtonComponent;

  if (downloadLink) {
    ButtonComponent = (
      <a href={downloadLink} download style={{ textDecoration: 'none' }}>
        <Button size="small" variant="text">
          {buttonLabel}
        </Button>
      </a>
    );
  } else if (navigationLink) {
    ButtonComponent = (
      <Button
        size="small"
        variant="text"
        component={RouterLink}
        to={navigationLink}
      >
        {buttonLabel}
      </Button>
    );
  } else {
    ButtonComponent = (
      <Button size="small" variant="text">
        {buttonLabel}
      </Button>
    );
  }

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
        {ButtonComponent}
      </CardActions>
    </Card>
  );
};

export default CustomCard;
