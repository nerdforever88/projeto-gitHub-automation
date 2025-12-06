// ***********************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
// ***********************************************

// Import commands.js using ES2015 syntax:
import "./commands";

// Alternatively you can use CommonJS syntax:
// require('./commands')

// Custom command for GitHub login


Cypress.Commands.add("login", (username, password) => {
  cy.session([username], () => {
    cy.visit("/login");

    cy.get("#login_field").should("be.visible").type(username);
    cy.get("#password").should("be.visible").type(password, { log: false });

    cy.get('input[name="commit"]').should("be.enabled").click();

    
    cy.location("pathname", { timeout: 15000 }).should("not.include", "login");
  });
});


