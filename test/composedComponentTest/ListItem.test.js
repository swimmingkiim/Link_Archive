import React from "react";
import { create } from "react-test-renderer";
import sampleData from "../sampleData";
import ListItem from "../../app/src/composedComponent/ListItem";

describe("test ListItem component", () => {

	test.each(sampleData)("test ListItem with sampleData %d", (data, done) => {
		
		const testListItem = create(<ListItem data={data} />).toJSON();
		
		expect(testListItem.type).toBe("div");
		expect(testListItem.children.length).toBe(3);
		done();
	});
});
