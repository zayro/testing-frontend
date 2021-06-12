context("Actions", () => {
  describe("todo app", () => {
    beforeEach(() => {
      cy.visit("/");
    });

    it(".clear() - clears an input or textarea element", () => {
      cy.get("#textForm")
        .type("Clear this text")
        .should("have.value", "Clear this text")
        .clear()
        .should("have.value", "");
    });

    it("add() - clears an input or textarea element", () => {
      cy.get("#textForm")
        .type("Hello World")
        .should("have.value", "Hello World");

      cy.wait(500);

      cy.get("#addList").click();

      //cy.get('[data-test-id="test-example"]').should('have.length', 1)
      cy.get(".new-item").should("have.length", 1);
    });

    it("Delete() -Elimina el primer elemento", () => {
      cy.get("#textForm")
        .type("Hello World")
        .should("have.value", "Hello World");

      cy.get("#addList").click();

      cy.wait(500);

      cy.get(".todo__state:first")
        .check({
          force: true,
        })
        .should("be.checked");

      cy.get("#btnEliminar").click();
      cy.get(".new-item").should("have.length", 0);
    });

    it("Delete() -Elimina todos los elementos", () => {
      cy.get("#textForm")
        .type("Hello World 1")
        .should("have.value", "Hello World 1");

      cy.get("#addList").click();

      cy.wait(500);

      cy.get("#textForm")
        .type("Hello World 2")
        .should("have.value", "Hello World 2");

      cy.get("#addList").click();

      cy.wait(500);

      cy.get(".todo__state")
        .check({
          force: true,
        })
        .should("be.checked");

      cy.wait(500);

      cy.get("#btnEliminar").click();
      cy.get(".new-item").should("have.length", 0);
    });
  });
});
