import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { create } from "react-test-renderer";
import sampleData from "../sampleData.js";
import Button from "../../app/src/basicComponent/Button";

describe("test Button's properties and onClick functions by passing the type", () => {
  const typesOfButton = ["save", "goBack", "edit", "update", "delete"];
  const singleData = sampleData[0];

  test.each(typesOfButton)(
    "test properties of basic %s button",
    (buttonType, done) => {
      const testButton = create(
        <Button
          type={buttonType}
          updateId={buttonType === "update" ? 12345 : null}
          data={buttonType === "save" ? singleData : null}
        />
      ).toTree();
      expect(testButton.rendered.props.type).toBe("button");
      expect(testButton.rendered.props.className).toStrictEqual(
        expect.any(String)
      );
      expect(testButton.rendered.props.children).toBe(
        buttonType === "goBack" ? "go back" : buttonType
      );
      if (buttonType === "save") {
        expect(testButton.rendered.props.data).not.toBeNull();
      } else {
        expect(testButton.rendered.props.data).toBeNull();
      }
      if (buttonType === "update") {
        expect(testButton.rendered.props.updateId).not.toBeNull();
        expect(testButton.rendered.props["data-post-id"]).toBe("12345");
      } else {
        expect(testButton.rendered.props.updateId).toBeNull();
        expect(testButton.rendered.props["data-post-id"]).toBe("null");
      }
      done();
    }
  );
});
