/// <reference types="cypress" />

export class ShiftingContentPage {

    clickMenuElement(){
        cy.contains('Example 1: Menu Element').click()
    }
}
