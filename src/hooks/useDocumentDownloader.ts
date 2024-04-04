import { saveAs } from 'file-saver';
import { useDispatch } from 'react-redux';
import { addSnackbarInfo } from '../redux/snackbarInfo/snackbarInfoSlice';
import { ERROR_FILE_DOWNLOAD_MESSAGE } from '../utils/infoTexts';

export const useDocumentDownloader = () => {
    const dispatch = useDispatch();
    const downloadDocument = async (blob: Blob | null , filename: string) => {
      if (blob) {
        saveAs(blob, filename);            
      } else {
        console.error('No file available for download');
        dispatch(
            addSnackbarInfo({
              message: ERROR_FILE_DOWNLOAD_MESSAGE,
              severity: 'error',
            })
          );
      }
    };
  
    return downloadDocument;
  };
  

  