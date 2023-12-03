describe('Pruebas Heroku app', () => {
  it('login con usuario y contrasena validos', () => {
    cy.visit('https://the-internet.herokuapp.com/')
    cy.get(':nth-child(21) > a').click()
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('.fa').click()
    cy.get('#flash').contains("You logged into a secure area")
  });

  it('login con usuario invalido  y contrasena valida', () => { 
    cy.visit('https://the-internet.herokuapp.com/')
    cy.get(':nth-child(21) > a').click()
    cy.get('#username').type('jasmin')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('.fa').click()
    cy.get('#flash').contains("Your username is invalid!")
  });

  it('login con usuario valido  y contrasena invalida', () => { 
    cy.visit('https://the-internet.herokuapp.com/')
    cy.get(':nth-child(21) > a').click()
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPasswd')
    cy.get('.fa').click()
    cy.get('#flash').contains("Your password is invalid!")
  });

  it('login con usuario invalido  y contrasena invalida', () => { 
    cy.visit('https://the-internet.herokuapp.com/')
    cy.get(':nth-child(21) > a').click()
    cy.get('#username').type('tomsmih')
    cy.get('#password').type('SuperSecretPasswd')
    cy.get('.fa').click()
    cy.get('#flash').contains("Your username is invalid!")
  });
});
