import React from "react";
import { create } from "react-test-renderer";
import Tag from "../../app/src/basicComponent/Tag";

const createJSXForTag = (tagString) => {
  return <Tag tagString={tagString} />;
};

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
      const testTag = create(createJSXForTag(tagString)).toTree();
      expect(testTag.rendered.type).toBe("div");
      expect(testTag.props.tagString).toBe(tagString);
      expect(testTag.rendered.rendered.length).toBe(tagArray.length + 1);
      done();
    }
  );
});
