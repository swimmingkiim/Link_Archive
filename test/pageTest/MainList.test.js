import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import MainList from "../../app/src/page/MainList";
import sampleData from "../sampleData";

describe("test MainList Page", () => {

	let container = null;
	beforeEach(() => {
		container = document.createElement("div");
		document.body.appendChild(container);
	});

	afterEach(() => {
		unmountComponentAtNode(container);
		container.remove();
		container = null;
	});

	test("test: whether the child elements are in place", (done) => {
		render(<MainList dataList={sampleData} />, container);
		const sampleMainList = container.querySelector("main");

		expect(sampleMainList.children.length).toBe(2 + sampleData.length);
		expect(sampleMainList.children[0].tagName).toBe("SECTION");
		expect(sampleMainList.children[1 + sampleData.length].tagName).toBe("BUTTON");
		done();
	});

	test("test: if edit button clicked, update and delete button should show on and off", (done) => {
		render(<MainList dataList={sampleData} />, container);
		const sampleMainList = container.querySelector("main");
		const editButton = sampleMainList.querySelector(".edit-button");
		let numberOfTest = 5;
		while(numberOfTest) {
			editButton.click();
			expect(sampleMainList.classList.contains("edit-mode")).toBe(true);
			editButton.click();
			expect(sampleMainList.classList.contains("edit-mode")).toBe(false);
			numberOfTest--;
		}
		done();
	});
});
