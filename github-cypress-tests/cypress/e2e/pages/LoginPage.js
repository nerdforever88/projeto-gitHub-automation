const LoginPage = {
  visit() {
    cy.visit("/login");
  },
  fieldName: (username) => {
    cy.get("#login_field").type(username);
  },
  fieldPassword: (password) => {
    cy.get("#password").type(password, { log: false });
  },
  fieldClickLogin: () => {
    cy.get('input[name="commit"]').click();
  },
  doLogin: (username, password) => {
    LoginPage.visit();
    LoginPage.fieldName(username);
    LoginPage.fieldPassword(password);
    LoginPage.fieldClickLogin();
  },

  clickSignin: () => {
    cy.contains("Sign in").click({ force: true });
  },

  assertExpectedLoginUser: () => {
    cy.url().should("include", "github.com");
    cy.contains(
      '[data-target="context-region-crumb.labelElement"]',
      /^Dashboard/
    );
  },

  assertExpectedAvatarUser: () => {
    cy.get('[data-testid="github-avatar"]').should("be.visible");
  }
};

export default LoginPage;
