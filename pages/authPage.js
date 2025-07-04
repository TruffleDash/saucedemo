const { I } = inject();

module.exports = {
  fields: {
    username: '#user-name',
    password: '#password',
    loginButton: '#login-button'
  },

  login(username, password) {
    I.amOnPage('/');
    I.fillField(this.fields.username, username);
    I.fillField(this.fields.password, password);
    I.click(this.fields.loginButton);
  }
};
