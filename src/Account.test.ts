import AccountBuilder from './AccountBuilder';

test('Deve criar uma conta e fazer um crédito', () => {
  const account = new AccountBuilder('111.111.111-11')
    .setBank('000')
    .setBranch('0001')
    .setAccount('123456-7')
    .build();
  account.credit(1000);
  expect(account.getBalance()).toBe(1000);
});

test('Deve criar uma conta e fazer um débito', () => {
  const account = new AccountBuilder('111.111.111-11')
    .setBank('000')
    .setBranch('0001')
    .setAccount('123456-7')
    .build();
  account.credit(1000);
  account.debit(1000);
  expect(account.getBalance()).toBe(1000);
});
