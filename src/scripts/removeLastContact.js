import fs from 'node:fs/promises';

import { readContacts } from '../utils/readContacts.js';

import { PATH_DB, CODING } from '../constants/contacts.js';

export const removeLastContact = async () => {
  try {
    const initialContent = await readContacts();

    let updatedData = JSON.parse(initialContent);
    updatedData.pop();
    updatedData = JSON.stringify(updatedData);

    await fs.writeFile(PATH_DB, updatedData, CODING);

    console.log('Remove last: success');
  } catch (err) {
    console.error('Error of Removing last: ', err);
  }
};

removeLastContact();
