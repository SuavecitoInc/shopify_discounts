import fs from 'fs';
import path from 'path';
import { createObjectCsvWriter } from 'csv-writer';

type Row = {
  id: string;
  title: string;
  response: string;
};

const successFilePath = path.join(__dirname, '../../../output/success.csv');

const headers = [
  { id: 'id', title: 'ID' },
  { id: 'title', title: 'Title' },
  { id: 'response', title: 'Response' },
];

const fileExists = (filePath: string): boolean => fs.existsSync(filePath);

async function writeCsv(filePath: string, headers: { id: string; title: string }[], row: Row, append: boolean = false) {
  const csvWriter = createObjectCsvWriter({
    path: filePath,
    header: headers,
    append: append, // This option ensures that new rows are appended
  });

  await csvWriter.writeRecords([row]);
}

export async function writeSuccessCsv(row: Row) {
  if (!fileExists(successFilePath)) {
    await writeCsv(successFilePath, headers, row);
  } else {
    // file does not exist, create it
    await writeCsv(successFilePath, headers, row, true);
  }
}
