import fs from 'node:fs/promises';

import { PATH_DB, CODING } from '../constants/contacts.js';

export const removeAllContacts = async () => {
  try {
    await fs.writeFile(PATH_DB, '[]', CODING);

    console.log('Remove all: success');
  } catch (err) {
    console.error('Error of removing: ', err);
  }
};

removeAllContacts();
