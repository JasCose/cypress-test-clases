/// <reference types="cypress" />

export class ShiftingContentMenuElement {

    clickMenuElement(){
        cy.contains('Example 1: Menu Element').click()
    }
}
