import AccountBuilder from './AccountBuilder';
import AccountRepository from './AccountRepositoty';
import CreditCommand from './CreditCommand';
import Publisher from './Publisher';

export default class AccountApplicationService {
  constructor(
    readonly publisher: Publisher,
    readonly accountRepository: AccountRepository
  ) {}

  create(document: string) {
    const account = new AccountBuilder(document).build();
    this.accountRepository.save(account);
  }

  credit(acconutDocument: string, amount: number) {
    const creditCommand = new CreditCommand(acconutDocument, amount);
    this.publisher.publish(creditCommand);
  }

  get(accountDoucument: string) {
    return this.accountRepository.get(accountDoucument);
  }
}
