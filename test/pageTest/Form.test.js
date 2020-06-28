import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import sampleData from "../sampleData";
import Form from "../../app/src/page/Form";

describe("test Form component", () =>{

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

	test("test: All sub component(Input * 4, goBack and save button) should be in it(mode is 'new')", (done) => {
		render(<Form mode="new" />, container);
		
	});
	test("test: All sub component(Input * 4, goBack and save button) should be in it(mode is 'update')", (done) => {
		render(<Form mode="update" linkId={1}/>, container);
		
	});
});
