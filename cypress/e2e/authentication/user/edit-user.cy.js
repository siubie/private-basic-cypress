describe("test edit user", () => {
  beforeEach(() => {
    cy.login();
    //Act
    cy.get("#name").type("baru");
    cy.get("#email").type("baru@gmail.com");
    cy.get("#password").type("password12345678");
    //get submit button and click
    cy.get(".btn-primary").click();
    //Assert
    cy.contains("baru");
  });
  afterEach(() => {
    cy.visit("https://v2starter.putraprima.id/user-management/user");
    cy.contains("baru@gmail.com").nextAll().contains("Delete").click();
  });
  //positive test case
  it("can edit user name", () => {
    //act
    //click tombol edit
    cy.contains("baru@gmail.com").nextAll().contains("Edit").click();
    //update field nama jadi baru1
    cy.get("#name").clear().type("baru1");
    cy.get(".btn-primary").click();
    //assert
    cy.contains("baru1");
  });
  it("can edit user email", () => {
    //act
    //click tombol edit
    cy.contains("baru@gmail.com").nextAll().contains("Edit").click();
    //update field nama jadi baru1
    cy.get("#email").clear().type("baru1@gmail.com");
    cy.get(".btn-primary").click();
    //assert
    cy.contains("baru1@gmail.com");

    cy.contains("baru1@gmail.com").nextAll().contains("Edit").click();
    //update field nama jadi baru1
    cy.get("#email").clear().type("baru@gmail.com");
    cy.get(".btn-primary").click();
  });
  //negative test case
  it("fail to edit user name, name already used", () => {});
  it("fail to edit user email, email already used", () => {});
  it("fail to edit user email, email format is wrong", () => {});
  it("fail to edit user name, name is empty", () => {});
  it("fail to edit user email, email is empty", () => {});
});
