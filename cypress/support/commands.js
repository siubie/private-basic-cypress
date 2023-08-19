// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("login", () => {
  //Arrange
  cy.visit("https://v2starter.putraprima.id/");
  cy.get(":nth-child(2) > .form-control").clear();
  cy.get(":nth-child(2) > .form-control").type("superadmin@gmail.com");
  cy.get(":nth-child(3) > .form-control").clear();
  cy.get(":nth-child(3) > .form-control").type("password");
  cy.get(".btn").click();
  cy.visit("https://v2starter.putraprima.id/user-management/user");
  cy.contains("Create New User").click();
});
