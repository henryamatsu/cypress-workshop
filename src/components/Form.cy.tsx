import React from "react";
import Form from "./Form";

describe("<Form />", () => {
  describe("Submit button", () => {
    const submitButton = () => cy.get("[data-cy='submit-button']");
    const nameInput = () => cy.get("[data-cy='name-input']");
    const passwordInput = () => cy.get("[data-cy='password-input']");

    const requiredFields = [nameInput, passwordInput];

    beforeEach(() => {
      cy.mount(<Form />);
    });

    it("is disabled by default", () => {
      submitButton().should("be.disabled");
    });

    it("is enabled if all required fields are filled", () => {
      requiredFields.forEach((field) => field().type("Hello, world!"));
      submitButton().should("not.be.disabled");
    });
  });
});
