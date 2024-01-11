/// <reference types="cypress" />

import { MainPage } from "../page-objects/spec-main-page";

describe('Pruebas de login', () => {

    const mainPage = new MainPage();

    beforeEach(() => {
        mainPage.visitMainPage();
    });
    
    it('login con usuario y contraseña válidos', () => {
        cy.contains('Shifting Content').click()
        cy.contains('Example 1: Menu Element').click()
        cy.get('li').should('have.length', 5);
    });

});
