describe("Test untuk create user", () => {
  it("berhasil create user", () => {
    //Arrange
    cy.visit("https://v2starter.putraprima.id/");
    cy.get(":nth-child(2) > .form-control").clear();
    cy.get(":nth-child(2) > .form-control").type("superadmin@gmail.com");
    cy.get(":nth-child(3) > .form-control").clear();
    cy.get(":nth-child(3) > .form-control").type("password");
    cy.get(".btn").click();
    cy.visit("https://v2starter.putraprima.id/user-management/user");
    cy.contains("Create New User").click();
    //Act
    cy.get("#name").type("baru");
    cy.get("#email").type("baru@gmail.com");
    cy.get("#password").type("password12345678");
    //get submit button and click
    cy.get(".btn-primary").click();
    //Assert
    cy.contains("baru");
    cy.contains("baru@gmail.com").nextAll().contains("Delete").click();
    //clear data lagi
  });
});
