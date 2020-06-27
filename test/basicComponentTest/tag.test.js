import React from "react";
import { create } from "react-test-renderer";
import Tag from "../../app/src/basicComponent/Tag";

describe("test Tag's result by passing sample tagStrings", () => {
  const sampleTagStrings = [
    "HTML, CSS, Javascript",
    "webpack, jest",
    "react, vue, angular",
    "node, express, django, java spring, flask",
  ];
  test.each(sampleTagStrings)(
    "test Tag component by giving [%s] as a tagString",
    (tagString, done) => {
      const tagArray = tagString.split(", ");
      const testTag = create(<Tag tagString={tagString}/>).toTree();
      expect(testTag.rendered.type).toBe("ul");
      expect(testTag.props.tagString).toBe(tagString);
      expect(testTag.rendered.rendered.length).toBe(tagArray.length + 1);
      done();
    }
  );
});
