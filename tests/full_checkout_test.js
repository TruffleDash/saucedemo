Feature('Полное оформление заказа');

const { I, authPage, productPage, cartPage, checkoutStepPage, checkoutStep2Page, checkoutCompletePage } = inject();

Before(() => {
  authPage.login('standard_user', 'secret_sauce');
});

Scenario('Полное оформление заказа с добавлением товара и оплатой', () => {
  productPage.addBackpackToCart();
  productPage.goToCart();
  cartPage.proceedToCheckout();

  checkoutStepPage.fillCheckoutForm('Daria', 'Kuznetsova', '123456');
  checkoutStep2Page.finishOrder();

  checkoutCompletePage.seeSuccessMessage();
});
