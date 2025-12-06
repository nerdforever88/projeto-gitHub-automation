const UserMenuPage = {
  openUserMenu() {
    cy.get('button[aria-label="Open user navigation menu"]').click();

  },
  clickSignOut() {
    cy.contains("a", "Sign out").click();
  },

  assertLogoutUser() {
    cy.url().should("include", "/logout");
  },

  
};

export default UserMenuPage;
