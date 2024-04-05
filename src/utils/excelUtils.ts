import * as XLSX from 'xlsx';
import { ExcelRow } from '../types';

export const parseExcelFile = async (file: File): Promise<ExcelRow[]> => {
  const reader = new FileReader();

  const readFile = new Promise<string | ArrayBuffer>((resolve, reject) => {
    reader.onload = (e) => {
      if (e.target?.result) {
        resolve(e.target.result);
      } else {
        reject(new Error('No result from file reading'));
      }
    };
    reader.onerror = (e) => reject(e.target?.error);
    reader.readAsBinaryString(file);
  });

  try {
    const binaryStr = await readFile;
    if (typeof binaryStr !== 'string') {
      throw new Error('File reading did not return a string');
    }

    const workbook = XLSX.read(binaryStr, { type: 'binary' });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];

    return XLSX.utils.sheet_to_json(worksheet, {
      header: 'A',
      blankrows: false,
      defval: null,
    });
  } catch (error) {
    throw new Error(`Error parsing Excel file: ${error}`);
  }
};
