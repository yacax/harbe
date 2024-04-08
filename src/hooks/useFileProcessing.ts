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
  const [shouldDownloadAfterProcessing, setShouldDownloadAfterProcessing] =
    useState(false);

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
        if (shouldDownloadAfterProcessing && blob) {
          downloadDocument(blob, 'generated_documents.zip');
        }
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
    setShouldDownloadAfterProcessing(false);
  };

  const downloadDocuments = async () => {
    downloadDocument(generatedDocumentsBlob, 'generated_documents.zip');
  };

  const loadExampleFiles = async () => {
    try {
      const docResponse = await fetch('/templates/certificate_template.docx');
      if (!docResponse.ok) {
        dispatch(
          addSnackbarInfo({
            message: `Error loading example.docx: Status ${docResponse.status}`,
            severity: 'error',
          })
        );
        throw new Error(
          `Error loading example.docx: Status ${docResponse.status}`
        );
      }
      const docBlob = await docResponse.blob();
      const docFile = new File([docBlob], 'certificate_template.docx', {
        type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      });

      const xlsResponse = await fetch('/templates/data_template.xlsx');
      if (!xlsResponse.ok) {
        dispatch(
          addSnackbarInfo({
            message: `Error loading example.xlsx: Status ${xlsResponse.status}`,
            severity: 'error',
          })
        );
        throw new Error(
          `Error loading example.xlsx: Status ${xlsResponse.status}`
        );
      }
      const xlsBlob = await xlsResponse.blob();
      const xlsFile = new File([xlsBlob], 'data_template.xlsx', {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      });

      setDocumentTemplateFile(docFile);
      setExcelDataFile(xlsFile);
    } catch (error) {
      console.error('Error loading example files', error);
      dispatch(
        addSnackbarInfo({
          message: 'Error processing files',
          severity: 'error',
        })
      );
    }
  };

  return {
    documentTemplateFile,
    setDocumentTemplateFile,
    excelDataFile,
    setExcelDataFile,
    generatedDocumentsBlob,
    processFiles,
    setShouldDownloadAfterProcessing,
    downloadDocuments,
    loadExampleFiles,
  };
};

export default useFileProcessing;
