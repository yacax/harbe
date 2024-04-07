import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import PostAddIcon from '@mui/icons-material/PostAdd';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import BackgroundImagePaper from './BackgroundImagePaper';
import docImage from '../../images/logo-doc.svg';
import tableImage from '../../images/logo-sheet.svg';

interface FileInputButtonProps {
  id: string;
  acceptFileType: string;
  onFileSelect: (file: File) => void;
  buttonLabel?: string;
}

const FileInputButton: React.FC<FileInputButtonProps> = ({
  id,
  acceptFileType,
  onFileSelect,
  buttonLabel = 'Upload Template',
}) => {
  const [fileName, setFileName] = useState<string>('');
  const isDocumentTemplate = acceptFileType !== '.xlsx';
  const imageForUpload = isDocumentTemplate ? docImage : tableImage;

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
      onFileSelect(file);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: '0.5rem', md: '1rem' },
      }}
    >
      <BackgroundImagePaper imagePath={imageForUpload} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: '0.5rem', md: '1rem' },
        }}
      >
        <Typography
          variant="body1"
          component="p"
          sx={{ fontSize: '1rem', fontWeight: fileName ? 700 : 400 }}
        >
          {fileName || 'Choose file'}
        </Typography>

        <input
          accept={acceptFileType}
          style={{ display: 'none' }}
          id={id}
          type="file"
          onChange={handleFileChange}
        />
        <label htmlFor={id}>
          <Button
            variant="outlined"
            color="primary"
            component="span"
            startIcon={
              isDocumentTemplate ? <PostAddIcon /> : <PlaylistAddIcon />
            }
          >
            {buttonLabel}
          </Button>
        </label>
      </Box>
    </Box>
  );
};

export default FileInputButton;
