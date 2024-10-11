import fs from 'node:fs/promises';

import { PATH_DB, CODING } from '../constants/contacts.js';

export const writeContacts = async (updatedContacts) => {
  try {
    await fs.writeFile(PATH_DB, updatedContacts, CODING);

    console.log('Write file: success');
  } catch (err) {
    console.error('Error of Writing: ', err);
  }
};
