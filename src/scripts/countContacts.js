import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  const contacts = await readContacts();
  const amount = JSON.parse(contacts).length;

  return amount;
};

console.log(await countContacts());
