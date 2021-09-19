import Account from './Account';
import Command from './Command';
import TransferService from './TransferService';

export default class DebitCommand implements Command {
  operation = 'transfer';

  constructor(
    readonly acconutFrom: Account,
    readonly accountTo: Account,
    readonly amount: number
  ) {}

  execute(): void {
    const transferService = new TransferService();
    transferService.transfer(this.acconutFrom, this.accountTo, this.amount);
  }
}
