import JSZip from 'jszip';
import PizZip from 'pizzip';
import Docxtemplater from 'docxtemplater';
import { ExcelRow } from '../types';

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
      documentsZipBlob.file(`Document_${index + 1}.docx`, documentBlob);
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




// export const generateDocumentsFromTemplate = async (
//     documentTemplateFile: File,
//     data: ExcelRow[]
//   ): Promise<Blob> => {
//     return new Promise((resolve, reject) => {
//       const templateReader = new FileReader();
//       templateReader.onload = async (e) => {
//         const target = e.target as FileReader;
//         if (target.result) {
//           try {
//             const generatedDocumentsBlob = new JSZip();
//             data.forEach((row, index) => {
//               const zipContent = target.result as string;
//               const zip = new PizZip(zipContent);
//               const doc = new Docxtemplater(zip);

//               doc.setData(row);
//               doc.render();

//               const docBlob = doc.getZip().generate({ type: 'blob' });
//               generatedDocumentsBlob.file(
//                 `Document_${index + 1}.docx`,
//                 docBlob
//               );
//             });

//             const blob = await generatedDocumentsBlob.generateAsync({
//               type: 'blob',
//             });
//             resolve(blob);
//           } catch (error) {
//             reject(error);
//           }
//         }
//       };
//       templateReader.readAsBinaryString(documentTemplateFile);
//     });
//     }