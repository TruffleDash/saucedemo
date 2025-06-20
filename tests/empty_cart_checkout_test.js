// этот тест не проходит ( Element "#checkout" is still visible on page.), так и надо; на сайте есть возможность овормить пустую корзину
Feature('Оформление заказа');

const { authPage, productPage, cartPage } = inject();

Before(({ I }) => {
  authPage.login('standard_user', 'secret_sauce');
});

Scenario('Попытка оформления заказа с пустой корзиной', ({ I, cartPage }) => {
  productPage.goToCart(); 
  I.dontSeeElement('.cart_item'); 
  I.dontSeeElement('#checkout');  
});
