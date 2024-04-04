import React, { useState } from 'react';
import { parseExcelFile } from '../../../utils/excelUtils';
import { generateDocumentsFromTemplate } from '../../../utils/documentUtils';
import { Button, TextField } from '@mui/material';
import { useDocumentDownloader } from '../../../hooks/useDocumentDownloader';
import { addSnackbarInfo } from '../../../redux/snackbarInfo/snackbarInfoSlice';
import { useDispatch } from 'react-redux';
import { AppDispatchType } from '../../../redux/store/store';
import {
  ERROR_FILE_MESSAGE,
  INFO_FILE_MESSAGE,
} from '../../../utils/infoTexts';

const FileUploadForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatchType>();
  const [documentTemplateFile, setdocumentTemplateFile] = useState<File | null>(
    null
  );
  const [excelDataFile, setExcelDataFile] = useState<File | null>(null);
  const [generatedDocumentsBlob, setGeneratedDocumentsBlob] =
    useState<Blob | null>(null);

  const downloadDocument = useDocumentDownloader();

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<File | null>>
  ) => {
    const file = event.target.files ? event.target.files[0] : null;
    setter(file);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (documentTemplateFile && excelDataFile) {
      try {
        const data = await parseExcelFile(excelDataFile);
        const blob = await generateDocumentsFromTemplate(
          documentTemplateFile,
          data
        );
        setGeneratedDocumentsBlob(blob);
        dispatch(
          addSnackbarInfo({
            message: INFO_FILE_MESSAGE,
            severity: 'success',
          })
        );
      } catch (error) {
        console.error('Error processing files', error);
        dispatch(
          addSnackbarInfo({
            message: ERROR_FILE_MESSAGE,
            severity: 'error',
          })
        );
      }
    }
  };

  const downloadGeneratedDocuments = async () => {
    downloadDocument(generatedDocumentsBlob, 'generated_documents.zip');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        type="file"
        onChange={(e) =>
          handleFileChange(
            e as React.ChangeEvent<HTMLInputElement>,
            setdocumentTemplateFile
          )
        }
        inputProps={{ accept: '.docx' }}
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        type="file"
        onChange={(e) =>
          handleFileChange(
            e as React.ChangeEvent<HTMLInputElement>,
            setExcelDataFile
          )
        }
        inputProps={{ accept: '.xlsx' }}
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        Generate Documents
      </Button>
      <Button
        type="button"
        variant="contained"
        color="primary"
        onClick={downloadGeneratedDocuments}
      >
        Download documents
      </Button>
    </form>
  );
};

export default FileUploadForm;
