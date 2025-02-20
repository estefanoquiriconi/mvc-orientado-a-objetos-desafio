import test from 'ava';
import { ContactsController } from './controllers';
import { ContactsCollection } from './models';

test('Testeo el constructor del controller', (t) => {
  const controller = new ContactsController();
  t.is(controller.contacts instanceof ContactsCollection, true);
  t.is(controller.contacts.contacts.length > 0, true);
});

test('Testeo el método processOptions', (t) => {
  const controller = new ContactsController();
  controller.processOptions({ action: 'get', params: { id: 1 } });
  t.is(controller.contacts.getOneById(1), controller.contacts.contacts[0]);

  controller.processOptions({
    action: 'save',
    params: { id: 222, name: 'Estéfano' },
  });

  t.is(
    controller.contacts.getOneById(222),
    controller.contacts.contacts.at(-1)
  );
});
