import React from "react";
import { create } from "react-test-renderer";
import Table from "../../app/src/basicComponent/Table";

describe("test Table component", () => {

	const tableTestSample = [
		{
			id: 1,
			title: "React Document",
			link: "https://reactjs.org/docs/getting-started.html",
			date: "2020-06-26"
		},
		{
			id: 123,
			title: "my github page",
			link: "https://github.com/swimmingkiim",
			date: "2020-05-11"
		},
		{
			id: 12345,
			title: "create react app without create-react-app",
			link: "https://dev.to/vish448/create-react-project-without-create-react-app-3goh",
			date: "2019-02-06"
		},
	];

	test.each(tableTestSample)("test innerHTML of Table components", (data, done) => {
		const testTable = create(<Table info={data}/>).toJSON();
		expect(testTable.type).toBe("section");
		expect(testTable.children.length).toBe(3);
		expect(testTable.children[0].children[0]).toBe(data.id.toString());
		expect(testTable.children[1].children[0]).toBe(data.title);
		expect(testTable.children[2].children[0]).toBe(data.date);
		done();
	});
});
