import React from "react"
import { create } from "react-test-renderer";
import Input from "../../app/src/basicComponent/Input";

const createJSXForInput = ({displayString, uniqueId}) => {
	return (
		<Input displayString={displayString} uniqueId={uniqueId} />
	);
}


describe("test Input component for properties", () => {
	const inputTypes = [
		{
			displayString: "Title",
			uniqueId: "newTitle"
		},
		{
			displayString: "Link Address",
			uniqueId: "newLink"
		},
		{
			displayString: "Tags (seperated by comma , )",
			uniqueId: "newTags"
		},
		{
			displayString: "Type Keyword",
			uniqueId: "newSearchString"
		},
	];

	test.each(inputTypes)("check if Input properties are correctly included", (properties, done) => {
		const testInput = create(createJSXForInput(properties)).toTree();
		expect(testInput.rendered.type).toBe("input");
		expect(testInput.rendered.props.id).toBe(properties.uniqueId);
		expect(testInput.rendered.props.placeholder).toBe(properties.displayString);
		done();
	});
});
