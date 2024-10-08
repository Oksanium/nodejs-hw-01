import fs from 'node:fs/promises';

import { PATH_DB, CODING } from '../constants/contacts.js';

export const readContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, CODING);
    return data;
  } catch (err) {
    console.error('Error of reading: ', err);
  }
};
