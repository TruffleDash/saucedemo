const { I } = inject();

module.exports = {
  finishButton: '#finish',

  finishOrder() {
    I.click(this.finishButton);
  }
};
