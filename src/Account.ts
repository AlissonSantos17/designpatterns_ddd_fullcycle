import AccountBuilder from './AccountBuilder';
import Transation from './Transaction';

export default class Account {
  private bank: string | undefined;
  private branch: string | undefined;
  private account: string | undefined;
  document: string;
  private transactions: Transation[];

  constructor(accountBuilder: AccountBuilder) {
    this.bank = accountBuilder.bank;
    this.branch = accountBuilder.branch;
    this.account = accountBuilder.account;
    this.document = accountBuilder.document;
    this.transactions = [];
  }

  credit(amount: number) {
    this.transactions.push(new Transation('credit', amount));
  }

  debit(amount: number) {
    this.transactions.push(new Transation('debit', amount));
  }

  getBalance() {
    let balance = 0;
    for (const transaction of this.transactions) {
      if (transaction.type == 'credit') {
        balance += transaction.amount;
      }

      if (transaction.type == 'debit') {
        balance -= transaction.amount;
      }
    }
    return balance;
  }
}
