import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';

export const generateContacts = async (number) => {
  try {
    const newContacts = [];
    for (let i = 0; i < number; i++) {
      newContacts.push(createFakeContact());
    }
    await writeContacts(newContacts);
  } catch (error) {
    console.log("Can't create contacts: ", error);
  }
};

generateContacts(5);
