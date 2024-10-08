import fs from 'node:fs/promises';

import { readContacts } from './readContacts.js';

import { PATH_DB, CODING } from '../constants/contacts.js';

export const writeContacts = async (updatedContacts) => {
  try {
    const initialContent = await readContacts();

    const updatedData = JSON.stringify([
      ...JSON.parse(initialContent),
      ...updatedContacts,
    ]);

    await fs.writeFile(PATH_DB, updatedData, CODING);

    console.log('Write file: success');
  } catch (err) {
    console.error('Error of Writing: ', err);
  }
};
