import React from "react";
import { create } from "react-test-renderer";
import Title from "../../app/src/basicComponent/Title";

describe("test Title component", () => {
	test("test Title component's innerHTML", (done) => {
		const testTitle = create(<Title />).toJSON();
		expect(testTitle.children[0]).toBe("Link_Archive");
		expect(testTitle.type).toBe("h1");
		done();
	});	
});
