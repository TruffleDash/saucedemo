Feature('Оформление заказа');

Before(({ authPage }) => {
  authPage.login('standard_user', 'secret_sauce');
});

Scenario('Переход к оформлению заказа без авторизации', ({ I, productPage, cartPage, checkoutStepPage }) => {
  productPage.addBackpackToCart();
  productPage.goToCart();
  cartPage.proceedToCheckout();

  checkoutStepPage.submitEmptyForm();

  I.see('Error: First Name is required', '.error-message-container');
});

Scenario('Ошибка при незаполненном поле "Zip/Postal Code"', ({ I, productPage, cartPage, checkoutStepPage }) => {
  productPage.addBackpackToCart();
  productPage.goToCart();
  cartPage.proceedToCheckout();

  checkoutStepPage.fillCheckoutForm('Jane', 'Doe', '');

  checkoutStepPage.seeError('Error: Postal Code is required');
});
