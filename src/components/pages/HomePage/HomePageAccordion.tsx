import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';

export const HomePageAccordion = () => {
  return (
    <Accordion
      sx={{
        width: '100%',
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <PsychologyAltIcon
          sx={{
            mr: 1,
          }}
        />
        Instructions
      </AccordionSummary>
      <AccordionDetails>
        <List>
          <ListItem>
            <ListItemText primary="1. Upload your document template and Excel data file. You can use the sample templates. To do this, click on the purple light bulb.  👉" />
          </ListItem>
          <ListItem>
            <ListItemText primary="2. Click on the button to generate documents." />
          </ListItem>
          <ListItem>
            <ListItemText primary="3. Click on the button to download the generated documents." />
          </ListItem>
        </List>
      </AccordionDetails>
    </Accordion>
  );
};
