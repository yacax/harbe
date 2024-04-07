import React from 'react';
import { Tooltip, IconButton } from '@mui/material';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';

type Props = {
  loadExampleFiles: () => void;
  lableText: string;
};

export default function AddStandartTemplateButton({
  loadExampleFiles,
  lableText,
}: Props) {
  return (
    <Tooltip title={lableText}>
      <IconButton
        color="secondary"
        aria-label={lableText}
        sx={{
          ml: 1,
        }}
        onClick={loadExampleFiles}
      >
        <TipsAndUpdatesIcon />
      </IconButton>
    </Tooltip>
  );
}
