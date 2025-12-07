const printSreenshot = (screenshotName) => {
  cy.screenshot(`img/${screenshotName}`);
}

export default  printSreenshot