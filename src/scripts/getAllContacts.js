import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  const contacts = await readContacts();

  return JSON.parse(contacts);
};

console.log(await getAllContacts());
