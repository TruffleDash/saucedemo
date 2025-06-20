const { I } = inject();

module.exports = {
  successMessage: '[data-test="complete-header"]',
  backToProductsButton: '#back-to-products',

  seeSuccessMessage() {
    I.see('Thank you for your order!', this.successMessage);
  },

  returnToProducts() {
    I.click(this.backToProductsButton);
  }
};