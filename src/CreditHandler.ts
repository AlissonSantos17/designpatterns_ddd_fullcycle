import AccountRepository from './AccountRepositoty';
import CreditCommand from './CreditCommand';
import Observer from './Observer';

export default class CreditHandler implements Observer {
  operation = 'credit';

  constructor(readonly accountRepository: AccountRepository) {}

  notify(command: CreditCommand): void {
    const account = this.accountRepository.get(command.acconutDocument);
    if (account) {
      account.credit(command.amount);
    }
  }
}
