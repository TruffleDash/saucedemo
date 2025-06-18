Feature('Авторизация');

Scenario('Успешная авторизация стандартного пользователя', async ({ I, authPage }) => {
  authPage.login('standard_user', 'secret_sauce');
  I.see('Products', '.title');
  I.seeInCurrentUrl('/inventory.html');
});

Scenario('Ошибка при вводе неверного пароля для стандарного пользователя', async ({ I, authPage }) => {
  authPage.login('standard_user', 'wrong_password');
  I.see('Epic sadface: Username and password do not match any user in this service');
});

Scenario('Ошибка при вводе неверного логина', async ({ I, authPage }) => {
  authPage.login('wrong_user', 'secret_sauce');
  I.see('Epic sadface: Username and password do not match any user in this service');
});

Scenario('Ошибка при пустом пароле для стандарного пользователя', async ({ I, authPage }) => {
  authPage.login('standard_user', '');
  I.see('Epic sadface: Password is required');
});

Scenario('Ошибка при пустом логине', async ({ I, authPage }) => {
  authPage.login('', 'secret_sauce');
  I.see('Epic sadface: Username is required');
});

Scenario('Ошибка при пустом логине и пароле', async ({ I, authPage }) => {
  authPage.login('', '');
  I.see('Epic sadface: Username is required');
});
