describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://v2starter.putraprima.id/");
    cy.get(":nth-child(2) > .form-control").clear("superadmin@gmail.com");
    cy.get(":nth-child(2) > .form-control").type("superadmin@gmail.com");
    cy.get(":nth-child(3) > .form-control").clear("password");
    cy.get(":nth-child(3) > .form-control").type("password");
    cy.get(".btn").click();
    cy.get(".nav-link > .d-sm-none").should("have.text", "Hi, SuperAdmin");
    cy.get(".navbar-right > :nth-child(2) > .nav-link").click();
    cy.get(".text-danger").click();
  });

  it.only("login dengan username salah", () => {
    cy.visit("https://v2starter.putraprima.id/");
    /* ==== Generated with Cypress Studio ==== */
    cy.get(":nth-child(2) > .form-control").clear("superadmin@gmail.com");
    cy.get(":nth-child(2) > .form-control").type("superadmin@gmail.com");
    cy.get(":nth-child(3) > .form-control").clear("p");
    cy.get(":nth-child(3) > .form-control").type("passwordsalah");
    cy.get(".btn").click();
    cy.get(".invalid-feedback").click();
    cy.get(".invalid-feedback").click();
    cy.get(".invalid-feedback").should(
      "have.text",
      "These credentials do not match our records."
    );
    /* ==== End Cypress Studio ==== */
  });
});
