/// <reference types="cypress" />

import { MainPage } from "../page-objects/main-page";
import { ShiftingContentMenuElement } from "../page-objects/shifting-content-menu-element";
import { ShiftingContent } from "../page-objects/shifting-content-page";

describe('Pruebas de login', () => {

    const mainPage = new MainPage();
    const shiftingContent = new ShiftingContent();
    const ShiftingContentMenuElement = new ShiftingContentMenuElement();

    beforeEach(() => {
        mainPage.visitMainPage();
    });
    
    it('login con usuario y contraseña válidos', () => {
        shiftingContent.clickShiftingContent()
        ShiftingContentMenuElement.ShiftingContentMenuElement()
        cy.get('li').should('have.length', 5);
    });

});
