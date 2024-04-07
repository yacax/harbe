import React from 'react';
import { Box, Button, Divider, Grid, Paper } from '@mui/material';
import useFileProcessing from '../../../hooks/useFileProcessing';
import FileInputButton from '../../@extended/FileInputButton';
import { HomePageAccordion } from './HomePageAccordion';
import AddStandartTemplateButton from '../../@extended/AddStandartTemplateButton';

const FileUploadForm: React.FC = () => {
  const {
    documentTemplateFile,
    setDocumentTemplateFile,
    excelDataFile,
    setExcelDataFile,
    generatedDocumentsBlob,
    processFiles,
    downloadDocuments,
    loadExampleFiles,
  } = useFileProcessing();

  return (
    <Paper style={{ padding: '20px', margin: '5px' }}>
      <Box
        sx={{
          display: 'flex',
          direction: 'row',
          justifyContent: 'space-between',
        }}
      >
        <HomePageAccordion />
        <Divider orientation="vertical" flexItem />
        <AddStandartTemplateButton
          loadExampleFiles={loadExampleFiles}
          lableText="Fill out the form with standard templates."
        />
      </Box>

      <form onSubmit={processFiles} noValidate>
        <Grid
          container
          spacing={3}
          sx={{
            mt: {
              xs: 0.3,
              md: 2,
            },
          }}
        >
          <Grid item xs={12} md={6}>
            <FileInputButton
              id="document-template"
              acceptFileType=".docx"
              onFileSelect={setDocumentTemplateFile}
              buttonLabel="Upload Template"
              fileName={documentTemplateFile?.name}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FileInputButton
              id="excel-data"
              acceptFileType=".xlsx"
              onFileSelect={setExcelDataFile}
              buttonLabel="Upload Excel Data"
              fileName={excelDataFile?.name}
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
