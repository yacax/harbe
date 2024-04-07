import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import { CONTENT_TEXTS } from '../../utils/contentTexts';

function CustomExcelTable() {
  return (
    <Paper
      style={{
        maxWidth: 400,
        marginTop: '20px',
      }}
    >
      <Table size="small" style={{ borderCollapse: 'collapse' }}>
        <TableHead>
          <TableRow>
            <TableCell
              style={{
                textAlign: 'center',
                backgroundColor: '#e0e0e0',
                border: '1px solid #000',
              }}
            >
              {' '}
            </TableCell>
            <TableCell
              style={{
                width: '90%',
                textAlign: 'center',
                backgroundColor: '#e0e0e0',
                border: '1px solid #000',
              }}
            >
              A
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {CONTENT_TEXTS.TABLE_EXAMPLE.map((person, index) => (
            <TableRow
              key={index}
              style={{
                backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#ffffff',
                border: '1px solid #000',
              }}
            >
              <TableCell
                style={{
                  textAlign: 'center',
                  backgroundColor: '#e0e0e0',
                  border: '1px solid #000',
                }}
              >
                {index + 1}
              </TableCell>
              <TableCell>{`${person.name}, ${person.title}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default CustomExcelTable;
