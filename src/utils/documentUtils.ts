import JSZip from 'jszip';
import PizZip from 'pizzip';
import Docxtemplater from 'docxtemplater';
import { ExcelRow } from '../types';
import {FILE_OPTIONS } from './config';

export const generateDocumentsFromTemplate = async (
  documentTemplateFile: File,
  data: ExcelRow[]
): Promise<Blob> => {
  try {
    const templateContent = await readFileAsync(documentTemplateFile);
    const documentsZipBlob = new JSZip();
    
    if (typeof templateContent !== 'string') {
      throw new Error("Template file reading did not return a string");
    }

    data.forEach((row, index) => {
      const templateZip = new PizZip(templateContent);
      const documentTemplate = new Docxtemplater(templateZip);

      documentTemplate.setData(row);
      documentTemplate.render();

      const documentBlob = documentTemplate.getZip().generate({ type: 'blob' });
      const firstRowKey = Object.keys(row)[0];   
      const extraStringForName = row[firstRowKey] || index;
      documentsZipBlob.file(FILE_OPTIONS.NAME_TEMPLATE(index, extraStringForName ), documentBlob);
    });

    return await documentsZipBlob.generateAsync({ type: 'blob' });
  } catch (error) {
    throw new Error(`Error generating documents: ${error}`);
  }
};


const readFileAsync = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.result === null) {
        reject(new Error("Failed to read file"));
      } else {
        resolve(reader.result as string);
      }
    };
    reader.onerror = () => reject(reader.error);
    reader.readAsBinaryString(file);
  });
};
