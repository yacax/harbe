import React from 'react';
import { Box } from '@mui/material';

interface BackgroundImagePaperProps {
  imagePath: string;
}

const BackgroundImagePaper: React.FC<BackgroundImagePaperProps> = ({
  imagePath,
}) => {
  const backgroundStyle = {
    backgroundImage: `url(${imagePath})`,
  };

  return (
    <Box
      style={backgroundStyle}
      sx={{
        width: '100px',
        height: '100px',
      }}
    />
  );
};

export default BackgroundImagePaper;
