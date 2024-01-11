/// <reference types="cypress" />

import { MainPage } from "../page-objects/main-page";
import { ShiftingContentMenuElement } from "../page-objects/shifting-content-menu-element";
import { ShiftingContentPage } from "../page-objects/shifting-content-page";

describe('Shifting tests', () => {

    const mainPage = new MainPage();
    const shiftingContentMenuElement = new ShiftingContentMenuElement();
    const shiftingContentPage = new ShiftingContentPage();

    beforeEach(() => {
        mainPage.visitMainPage();
    });
    
    it('login con usuario y contraseña válidos', () => {
        mainPage.clickShiftingContent()
        shiftingContentPage.clickMenuElement()
        shiftingContentMenuElement.verifyLengthTable()
    });

});
