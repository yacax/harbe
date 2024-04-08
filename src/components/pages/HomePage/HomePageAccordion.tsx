import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemText,
  Link,
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
          <ListItem>
            <ListItemText
              primary="Note on Fonts: Some templates, like the provided example, use specific fonts (e.g., Trebuchet MS and Cookie). While Trebuchet MS will likely be automatically substituted by your system, Cookie is a custom font. For optimal results, consider downloading and installing it. Please find the link below:"
              secondary={
                <Link
                  href="https://fonts.google.com/specimen/Cookie?selection.family=Cookie"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Fonts
                </Link>
              }
            />
          </ListItem>
        </List>
      </AccordionDetails>
    </Accordion>
  );
};
