/// <reference types="cypress" />

import LoginPage from "./pages/LoginPage";
import UserMenuPage from "./pages/UserMenuPage";
import RepositoryPage from "./pages/RepositoryPage";

const USERNAME = Cypress.env("GITHUB_USERNAME");
const PASSWORD = Cypress.env("GITHUB_PASSWORD");
const EXPECTED_USERNAME = Cypress.env("GITHUB_EXPECTED_USERNAME") || Cypress.env("GITHUB_USERNAME");
const RANDOM_REPO_NAME = `test-repo-${Math.floor(Math.random() * 10000)}`;

describe("Testes de autenticação e repositório do GitHub", () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    LoginPage.doLogin(USERNAME, PASSWORD);
  });

  it("01 - Deve realizar login no Github", () => {
   
    LoginPage.assertExpectedLoginUser();
    UserMenuPage.openUserMenu();
  });

  it.only("02 - Deve interagir e criar com repositórios", () => {
    UserMenuPage.openUserMenu();
    UserMenuPage.goToRepositories();
    RepositoryPage.assertExpectedRepositoryUrl('nerdforever88');
    RepositoryPage.clickNewRepository();

    cy.url().should("include", "/new");
    RepositoryPage.RepositoryName(RANDOM_REPO_NAME);
    RepositoryPage.assertWaitForNameValidation();
    RepositoryPage.submitCReateRepository();
    RepositoryPage.assertRepositoryCreated('nerdforever88', RANDOM_REPO_NAME);
  });

  it("03 - Deve realizar Logout com sucesso", () => {
    UserMenuPage.openUserMenu();

    UserMenuPage.clickSignOut();

    UserMenuPage.assertLogoutUser();
  });
});
