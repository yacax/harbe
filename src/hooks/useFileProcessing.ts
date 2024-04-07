import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSnackbarInfo } from '../redux/snackbarInfo/snackbarInfoSlice';
import { parseExcelFile } from '../utils/excelUtils';
import { generateDocumentsFromTemplate } from '../utils/documentUtils';
import { useDocumentDownloader } from './useDocumentDownloader';

const useFileProcessing = () => {
  const dispatch = useDispatch();
  const downloadDocument = useDocumentDownloader();
  const [documentTemplateFile, setDocumentTemplateFile] = useState<File | null>(
    null
  );
  const [excelDataFile, setExcelDataFile] = useState<File | null>(null);
  const [generatedDocumentsBlob, setGeneratedDocumentsBlob] =
    useState<Blob | null>(null);

  const processFiles = async (event: React.FormEvent<HTMLFormElement>) => {
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
            message: 'Files processed successfully',
            severity: 'success',
          })
        );
      } catch (error) {
        console.error('Error processing files', error);
        dispatch(
          addSnackbarInfo({
            message: 'Error processing files',
            severity: 'error',
          })
        );
      }
    }
  };

  const downloadDocuments = async () => {
    downloadDocument(generatedDocumentsBlob, 'generated_documents.zip');
  };

  return {
    documentTemplateFile,
    setDocumentTemplateFile,
    excelDataFile,
    setExcelDataFile,
    generatedDocumentsBlob,
    processFiles,
    downloadDocuments,
  };
};

export default useFileProcessing;
