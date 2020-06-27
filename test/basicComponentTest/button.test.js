import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { create } from "react-test-renderer";
import Button from "../../app/src/basicComponent/Button";

describe("test Button's properties and onClick functions by passing the type", () => {
  const typesOfButton = ["save", "goBack", "edit", "update", "delete"];

  test.each(typesOfButton)(
    "test properties of basic %s button",
    (buttonType, done) => {
      const testButton = create(<Button type={buttonType} updateId={buttonType === "update" ? 12345 : null}/>).toTree();
      expect(testButton.rendered.props.className).toStrictEqual(
        expect.any(String)
      );
      expect(testButton.rendered.props.type).toBe(
        buttonType === "save" ? "submit" : "button"
      );
      expect(testButton.rendered.props.onClick).not.toBeNull();
      expect(testButton.rendered.props.children).toBe(
        buttonType === "goBack" ? "go back" : buttonType
      );
      if (buttonType == "update") {
        expect(testButton.rendered.props["data-post-id"]).toBe("12345");
      } else {
        expect(testButton.rendered.props["data-post-id"]).toBe("null");
      }
      done();
    }
  );

  test.each(typesOfButton)(
    "test if %s's onClick function are working properly",
    (buttonType, done) => {
      const homeAddress = "http://localhost";
      const currentAddress = window.location.href;
      const testButton = create(<Button type={buttonType} updateId={buttonType === "update" ? 12345 : null}/>).toTree();
      const mockOnClick = jest.fn(testButton.onClick);
      mockOnClick();
      expect(mockOnClick.mock.calls.length).toBe(1);
      switch (buttonType) {
        case "save":
          expect(window.location.href).toBe(homeAddress + "/");
        case "goBack":
          expect(window.location.href).toBe(currentAddress);
        case "edit":
        // expect(document.getElementById("main-list").classList).toContain(
        //   "edit-mode"
        // );
        case "update":
        // at the moment, window.location.href is throw 404, so activate after writing <Form />
        // expect(window.location.href).toBe(homeAddress + "/post/12345");
        case "delete":
          expect(window.location.href).toBe(homeAddress + "/");
      }
      done();
    }
  );
});
