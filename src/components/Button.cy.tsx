import React from "react";
import Button from "./Button";
import { VisibilityType } from "./enum";

describe("<Button />", () => {
  it("displays the default button", () => {
    cy.mount(<Button visibilityType={VisibilityType.default} />);
    cy.get("button").should("exist").click();
  });

  it("displays the disabled button", () => {
    cy.mount(<Button visibilityType={VisibilityType.disabled} />);
    cy.get("button").should("be.disabled");
  });

  it("doesn't display the hidden button", () => {
    cy.mount(<Button visibilityType={VisibilityType.hidden} />);
    cy.get("button").should("not.exist");
  });
});
