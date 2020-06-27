import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { create } from "react-test-renderer";
import Select from "../../app/src/basicComponent/Select"

describe("test Select component", () => {

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

	test("test if the options are correct", (done) => {
		const testSelect = create(<Select />).toJSON();

		expect(testSelect.type).toBe("section");
		expect(testSelect.children.length).toBe(2);
		expect(testSelect.children[0].type).toBe("label");
		expect(testSelect.children[0].props.id).toBe("selected-filter");
		expect(testSelect.children[0].props['data-filter-type']).toBe("null");
		expect(testSelect.children[0].props.onClick).not.toBeNull();
		expect(testSelect.children[1].type).toBe("ul");
		expect(testSelect.children[1].props.id).toBe("search-filter-list");
		expect(testSelect.children[1].children.length).toBe(4);

		testSelect.children[1].children.forEach((li) => {
			expect(li.props['data-value']).toBe(li.children[0]);
		});
		done();
	}); 

	test("test Select dropdown when you click it", (done) => {
		render(<Select />, container);
		let numberOfTest = 5;
		while(numberOfTest) {
			document.querySelector("#selected-filter").click();
			expect(document.querySelector("#selected-filter").classList.contains("down")).toBe(true);
			document.querySelector("#selected-filter").click();
			expect(document.querySelector("#selected-filter").classList.contains("down")).toBe(false);
			numberOfTest--;
		}
		done();
	}); 

	test("test if option clicked, check the values changed", (done) => {
		render(<Select />, container);
		const selectedValue = document.querySelector("#selected-filter");
		const ulList = document.querySelector("#search-filter-list").children;
		let numberOfTest = 0;
		while(numberOfTest < 4) {
			selectedValue.click();
			ulList[numberOfTest].click();
			expect(selectedValue.classList.contains("down")).toBe(false);
			expect(selectedValue.innerHTML).toBe(ulList[numberOfTest].dataset.value);
			expect(selectedValue.dataset.filterType).toBe(ulList[numberOfTest].dataset.value);
			numberOfTest++;
		}
		done();
	});
});
