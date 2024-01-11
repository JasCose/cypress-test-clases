/// <reference types="cypress" />

export class ShiftingContentMenuElement {

    verifyLengthTable(){
        cy.get('li').should('have.length', 5);
    }
}
