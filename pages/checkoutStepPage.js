const { I } = inject();

module.exports = {
  firstNameField: '#first-name',
  lastNameField: '#last-name',
  postalCodeField: '#postal-code',
  continueButton: '#continue',
  errorMessage: '[data-test="error"]',

  submitEmptyForm() {
    I.click(this.continueButton);
  },

  fillCheckoutForm(first, last, postal) {
    I.fillField(this.firstNameField, first);
    I.fillField(this.lastNameField, last);
    I.fillField(this.postalCodeField, postal);
    I.click(this.continueButton);
  },

  seeError(message) {
    I.see(message, this.errorMessage);
  }
};
