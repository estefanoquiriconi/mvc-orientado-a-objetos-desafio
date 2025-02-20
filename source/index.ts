import { ContactsController, ContactsControllerOptions } from './controllers';
import * as minimist from 'minimist';

function parseaParams(argv: any): ContactsControllerOptions {
  const result = minimist(process.argv.slice(2));
  console.log(result);

  return {
    action: result.action,
    params: JSON.parse(result.params),
  };
}

function main() {
  const controller = new ContactsController();
  const options = parseaParams(process.argv);
  console.log(options);
  const contacts = controller.processOptions(options);
  console.log(controller.contacts.getAll());
}

main();
