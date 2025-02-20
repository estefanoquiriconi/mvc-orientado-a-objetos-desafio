import './contacts.json';
import * as jsonfile from 'jsonfile';

class Contact {
  id: number = 0;
  name: string = '';
}

class ContactsCollection {
  contacts: Contact[] = [];

  load() {
    this.contacts = jsonfile.readFileSync(__dirname + '/contacts.json');
  }

  getAll() {
    return this.contacts;
  }

  addOne(contact: Contact) {
    this.contacts.push(contact);
  }

  save() {
    jsonfile.writeFileSync(__dirname + '/contacts.json', this.contacts);
  }

  getOneById(id: number) {
    return this.contacts.find((contact) => contact.id === id);
  }
}

export { ContactsCollection, Contact };
