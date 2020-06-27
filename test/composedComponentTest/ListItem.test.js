import React from "react";
import { create } from "react-test-renderer";
import ListItem from "../../app/src/composedComponent/ListItem";

describe("test ListItem component", () => {
	
	const sampleData = [
		{
			id: 1,
			title: "my intro website with github",
			link: "https://github.com/swimmingkiim",
			tags: "HTML, CSS, JS, React, create-react-app",
			date: "2020-06-27"
		},
		{
			id: 12345,
			title: "my family photo website",
			link: "httPs://google.com",
			tags: "Go, google, search, FANG",
			date: "1992-08-08"
		},
		{
			id: 1004,
			title: "Daum",
			link: "https://daum.net",
			tags: "Daum, Kakao",
			date: "2020-06-27"
		},
	];

	test.each(sampleData)("test ListItem with sampleData %d", (data, done) => {
		
		const testListItem = create(<ListItem data={data} />).toJSON();
		
		expect(testListItem.type).toBe("div");
		expect(testListItem.children.length).toBe(4);
		done();
	});
});
