const assert = require('assert');

Feature('Сортировка товаров');

Before(({ authPage }) => {
  authPage.login('standard_user', 'secret_sauce');
});

Scenario('Сортировка по возрастанию цены работает корректно', async ({ productPage, I }) => {
  productPage.sortByPriceLowToHigh();

  const priceElements = await I.grabTextFromAll(productPage.itemPrices);

  const prices = priceElements.map(p => parseFloat(p.replace('$', '')));

  const sorted = [...prices].sort((a, b) => a - b);

  assert.deepStrictEqual(prices, sorted, 'Товары не отсортированы по возрастанию цены');
});
