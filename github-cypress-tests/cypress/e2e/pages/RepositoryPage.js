const RepositoryPage = {
  assertExpectedRepositoryUrl(expectedUsername) {
    cy.url().should("include", `/${expectedUsername}?tab=repositories`);
  },
  clickNewRepository() {
    cy.get('a[href="/new"]').click({ multiple: true, force: true });
  },

  goToRepositories() {
    cy.contains("a", "Repositories").click();
  },

  RepositoryName(repoName) {
    cy.get("#repository-name-input").clear().type(repoName);
  },

  assertWaitForNameValidation() {
    cy.get("#RepoNameInput-is-available", { timeout: 15000 })
      .should("be.visible")
      .and("contain.text", "is available");
  },

  submitCReateRepository() {
    cy.get('button[type="submit"]').contains("Create repository").click();
  },

  assertRepositoryCreated(expectedUsername, repoName) {
    cy.url().should("include", `/${expectedUsername}/${repoName}`);
  },
};

export default RepositoryPage;
