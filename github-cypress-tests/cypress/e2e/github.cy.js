/// <reference types="cypress" />

import LoginPage from "./pages/LoginPage";
import UserMenuPage from "./pages/UserMenuPage";


const USERNAME = Cypress.env("GITHUB_USERNAME");
const PASSWORD = Cypress.env("GITHUB_PASSWORD");
const EXPECTED_USERNAME =
  Cypress.env("GITHUB_EXPECTED_USERNAME") || Cypress.env("GITHUB_USERNAME");
const RANDOM_REPO_NAME = `test-repo-${Math.floor(Math.random() * 10000)}`;

describe("Testes de autenticação e repositório do GitHub", () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it.only("01 - Deve realizar login no Github", () => {
    cy.visit("/");

    LoginPage.clickSignin();

    cy.url().should("include", "/login");

    LoginPage.doLogin(USERNAME, PASSWORD);

    LoginPage.assertExpectedLoginUser();
    UserMenuPage.openUserMenu();

    
  });

  it("02 - Deve interagir com repositórios", () => {
    // Log in first
    cy.login(USERNAME, PASSWORD);

    // Go to repositories tab
    cy.get('[data-tab-item="repositories"]').click();

    // Click on a random repository
    cy.get('a[itemprop*="codeRepository"]').first().click();

    // Go to Pull Requests tab
    cy.contains("Pull requests").click();

    // Create a new repository
    cy.visit("/new");
    cy.get("#repository_name").type(RANDOM_REPO_NAME);
    cy.get("#repository_description").type(
      "Test repository created by Cypress"
    );
    cy.get('button[type="submit"]').click();

    // Take a screenshot
    cy.screenshot("new-repository-created");
  });

  it.only("03 - Deve realizar Logout com sucesso", () => {
    LoginPage.doLogin(USERNAME, PASSWORD);

    UserMenuPage.openUserMenu();

    UserMenuPage.clickSignOut();

    UserMenuPage.assertLogoutUser();
  });
});
