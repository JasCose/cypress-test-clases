/// <reference types="cypress" />

export class LoginPage {

    userNameInput(text){
        cy.get('#username').type(text);
    }

    passwordInput(text){
        cy.get('#password').type(text);
    }

    clickLoginButton(){
        cy.get('.fa').click();
    }

    popUp(text){
        cy.get('#flash').contains(text);
    }

}