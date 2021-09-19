import Command from './Command';

export default class CreditCommand implements Command {
  operation = 'credit';

  constructor(readonly acconutDocument: string, readonly amount: number) {}
}
