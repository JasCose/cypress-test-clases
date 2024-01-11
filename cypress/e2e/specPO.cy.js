/// <reference types="cypress" />

import { MainPage } from "../page-objects/spec-main-page";
import { LoginPage } from "../page-objects/spec-ogin-page";

describe('Pruebas de login', () => {

    const mainPage = new MainPage();
    const loginPage = new LoginPage();

    beforeEach(() => {
        mainPage.visitMainPage();
        mainPage.clickFormAuthentication();
    });
    
    it('login con usuario y contraseña válidos', () => {
        loginPage.userNameInput('tomsmith');
        loginPage.passwordInput('SuperSecretPassword!');
        loginPage.clickLoginButton();
        loginPage.popUp("You logged into a secure area");
    });

    it('login con usuario inválido y contraseña válida', () => {
        loginPage.userNameInput('jasmin');
        loginPage.passwordInput('SuperSecretPassword!');
        loginPage.clickLoginButton();
        loginPage.popUp("Your username is invalid!");
    });

    it('login con usuario válido y contraseña inválida', () => {
        loginPage.userNameInput('tomsmith');
        loginPage.passwordInput('SuperSecretPassword');
        loginPage.clickLoginButton();
        loginPage.popUp("Your password is invalid!");
    });

    it('login con usuario inválido y contraseña inválida', () => {
        loginPage.userNameInput('tomsmih');
        loginPage.passwordInput('SuperSecretPasswd');
        loginPage.clickLoginButton();
        loginPage.popUp("Your username is invalid!");
    });
});
