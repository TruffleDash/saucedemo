const { I } = inject();

module.exports = {
  sortDropdown: '[data-test="product-sort-container"]',
  backpackButton: '#add-to-cart-sauce-labs-backpack',
  bikeLightButton: '#add-to-cart-sauce-labs-bike-light',
  cartIcon: '.shopping_cart_link',
  cartItem: '.cart_item',
  cartItemName: '.inventory_item_name',
  itemPrices: '[data-test="inventory-item-price"]',

  sortByPriceLowToHigh() {
    I.selectOption(this.sortDropdown, 'lohi');
  },

  addBackpackToCart() {
    I.click(this.backpackButton);
  },

  addBikeLightToCart() {
    I.click(this.bikeLightButton);
  },

  goToCart() {
    I.click(this.cartIcon);
  },

  seeItemInCart(itemName) {
    I.see(itemName, this.cartItemName);
  }
};
