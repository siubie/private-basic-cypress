describe("Selector", () => {
  it("Belajar Selector", () => {
    cy.visit("https://v2starter.putraprima.id");
    cy.contains("Login").click();
  });
});
