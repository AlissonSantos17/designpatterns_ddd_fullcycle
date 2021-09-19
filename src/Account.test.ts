import AccountApplicationService from './AccountApplicationService';
import AccountBuilder from './AccountBuilder';
import AccountRepositoryMemory from './AccountRepositoryMemory';
import CreditCommand from './CreditCommand';
import CreditHandler from './CreditHandler';
import Publisher from './Publisher';
import TransferService from './TransferService';

let service: AccountApplicationService;

beforeEach(() => {
  const publisher = new Publisher();
  const accountRepository = new AccountRepositoryMemory();
  publisher.register(new CreditHandler(accountRepository));
  service = new AccountApplicationService(publisher, accountRepository);
});

test('Deve criar uma conta', () => {
  service.create('111.111.111-11');
  const account = service.get('111.111.111-11');
  expect(account.getBalance()).toBe(0);
});

test('Deve criar uma conta e fazer um crédito', () => {
  service.create('111.111.111-11');
  service.credit('111.111.111-11', 1000);
  const account = service.get('111.111.111-11');
  expect(account.getBalance()).toBe(1000);
});

// test('Deve criar uma conta e fazer um débito', () => {
//   const account = new AccountBuilder('111.111.111-11')
//     .setBank('000')
//     .setBranch('0001')
//     .setAccount('123456-7')
//     .build();
//   const creditCommand = new CreditCommand(account, 1000);
//   creditCommand.execute();
//   account.debit(500);
//   expect(account.getBalance()).toBe(500);
// });

// test('Deve criar duas contas e fazer uma transferencia', () => {
//   const accountFrom = new AccountBuilder('111.111.111-11')
//     .setBank('000')
//     .setBranch('0001')
//     .setAccount('123456-7')
//     .build();
//   const accountTo = new AccountBuilder('222.222.222-22')
//     .setBank('033')
//     .setBranch('0001')
//     .setAccount('123456-8')
//     .build();
//   const creditCommandFrom = new CreditCommand(accountFrom, 1000);
//   creditCommandFrom.execute();
//   const creditCommandTo = new CreditCommand(accountTo, 500);
//   creditCommandTo.execute();
//   accountTo.credit(500);
//   const transferService = new TransferService();
//   transferService.transfer(accountFrom, accountTo, 700);
//   expect(accountFrom.getBalance()).toBe(300);
//   expect(accountTo.getBalance()).toBe(1200);
// });
