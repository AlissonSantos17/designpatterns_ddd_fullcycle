import Account from './Account';
import Command from './Command';

export default class DebitCommand implements Command {
  operation = 'debit';

  constructor(readonly acconut: Account, readonly amount: number) {}

  execute(): void {
    this.acconut.debit(this.amount);
  }
}
