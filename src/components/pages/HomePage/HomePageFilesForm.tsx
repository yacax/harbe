import React from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
} from '@mui/material';

import useFileProcessing from '../../../hooks/useFileProcessing';
import FileInputButton from '../../@extended/FileInputButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';

const FileUploadForm: React.FC = () => {
  const {
    documentTemplateFile,
    setDocumentTemplateFile,
    excelDataFile,
    setExcelDataFile,
    generatedDocumentsBlob,
    processFiles,
    downloadDocuments,
  } = useFileProcessing();

  return (
    <Paper style={{ padding: '20px', margin: '5px' }}>
      <Accordion
        sx={{
          mb: {
            xs: 2,
            md: 3,
          },
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
              <ListItemText primary="1. Upload your document template and Excel data file." />
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

      <form onSubmit={processFiles} noValidate>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <FileInputButton
              id="document-template"
              acceptFileType=".docx"
              onFileSelect={setDocumentTemplateFile}
              buttonLabel="Upload Template"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FileInputButton
              id="excel-data"
              acceptFileType=".xlsx"
              onFileSelect={setExcelDataFile}
              buttonLabel="Upload Excel Data"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disabled={!documentTemplateFile || !excelDataFile}
            >
              Generate Documents
            </Button>
          </Grid>
          <Grid item xs={12} md={4}>
            <Button
              type="button"
              variant="contained"
              onClick={downloadDocuments}
              fullWidth
              color="success"
              disabled={!generatedDocumentsBlob}
            >
              Download Documents
            </Button>
          </Grid>
          <Grid item xs={12} md={4}>
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              fullWidth
              disabled={!documentTemplateFile || !excelDataFile}
            >
              Generate & Download
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default FileUploadForm;
