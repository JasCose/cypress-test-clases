/// <reference types="cypress" />

import { MainPage } from "../page-objects/main-page";
import { ShiftingContentMenuElement } from "../page-objects/shifting-content-menu-element";
import { ShiftingContent } from "../page-objects/shifting-content-page";

describe('Pruebas de login', () => {

    const mainPage = new MainPage();
    const shiftingContent = new ShiftingContent();
    const shiftingContentMenuElement = new ShiftingContentMenuElement();

    beforeEach(() => {
        mainPage.visitMainPage();
    });
    
    it('login con usuario y contraseña válidos', () => {
        shiftingContent.clickShiftingContent()
        shiftingContentMenuElement.clickMenuElement()
        cy.get('li').should('have.length', 5);
    });

});
