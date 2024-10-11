import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const generateContacts = async (number) => {
  try {
    const newContacts = [];
    for (let i = 0; i < number; i++) {
      newContacts.push(createFakeContact());
    }

    const initialContent = await readContacts();

    const updatedData = JSON.stringify(
      [...initialContent, ...newContacts],
      null,
      2,
    );

    await writeContacts(updatedData);
  } catch (error) {
    console.log("Can't create contacts: ", error);
  }
};

generateContacts(5);
