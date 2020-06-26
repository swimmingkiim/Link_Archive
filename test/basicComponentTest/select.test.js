import React from "react";
import { create } from "react-test-renderer";
import Select from "../../app/src/basicComponent/Select"

describe("test Select component", () => {
	test("test if the options are correct", (done) => {
		const testSelect = create(<Select />).toJSON();
		expect(testSelect.type).toBe("select");
		expect(testSelect.children.length).toBe(4);
		expect(testSelect.children[0].children[0]).toBe("tag");
		expect(testSelect.children[1].children[0]).toBe("id");
		expect(testSelect.children[2].children[0]).toBe("title");
		expect(testSelect.children[3].children[0]).toBe("date");
		done();
	}); 
});
