describe("Test untuk create user", () => {
  beforeEach(() => {
    //Arrange
    cy.login();
  });
  //positive test case
  it("berhasil create user", () => {
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
  //negative test case
  it("gagal create user username is required", () => {
    //act
    cy.get("#email").type("baru@gmail.com");
    cy.get("#password").type("password12345678");
    //get submit button and click
    cy.get(".btn-primary").click();
    //assert
    cy.get(".invalid-feedback").should(
      "have.text",
      "\n                                    The name field is required.\n                                "
    );
  });
  it("gagal create user emai invalid ", () => {
    //act
    cy.get("#name").type("baru");
    cy.get("#email").type("baru");
    cy.get("#password").type("password12345678");
    //get submit button and click
    cy.get(".btn-primary").click();
    //assert
    /* ==== Generated with Cypress Studio ==== */
    cy.get(".invalid-feedback").should(
      "have.text",
      "\n                                    The email must be a valid email address.\n                                "
    );
    /* ==== End Cypress Studio ==== */
  });

  it("gagal create user password required", () => {
    //act
    cy.get("#name").type("baru");
    cy.get("#email").type("baru@gmail.com");
    //get submit button and click
    cy.get(".btn-primary").click();
    //assert
    /* ==== Generated with Cypress Studio ==== */
    cy.get(".invalid-feedback").should(
      "have.text",
      "\n                                    The password field is required.\n                                "
    );
    /* ==== End Cypress Studio ==== */
  });
});
