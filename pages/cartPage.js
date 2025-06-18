const { I } = inject();

module.exports = {
  checkoutButton: '[data-test="checkout"]',

  proceedToCheckout() {
    I.click(this.checkoutButton);
  }
};
