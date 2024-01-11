describe('Pruebas Heroku app', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/');
    cy.get(':nth-child(21) > a').click();
  });

  it('login con usuario y contraseña válidos', () => {
    cy.get('#username').type('tomsmith');
    passwordInput('SuperSecretPassword!')
    cy.get('.fa').click();
    cy.get('#flash').contains("You logged into a secure area");
  });

  it('login con usuario inválido y contraseña válida', () => {
    cy.get('#username').type('jasmin');
    passwordInput('SuperSecretPassword!')
    cy.get('.fa').click();
    cy.get('#flash').contains("Your username is invalid!");
  });

  it('login con usuario válido y contraseña inválida', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPasswd');
    cy.get('.fa').click();
    cy.get('#flash').contains("Your password is invalid!");
  });

  it('login con usuario inválido y contraseña inválida', () => {
    cy.get('#username').type('tomsmih');
    cy.get('#password').type('SuperSecretPasswd');
    cy.get('.fa').click();
    cy.get('#flash').contains("Your username is invalid!");
  });
});
