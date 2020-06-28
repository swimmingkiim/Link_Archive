import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Title from "../src/basicComponent/Title";
import MainList from "../src/page/MainList";
import Form from "../src/page/Form";

const App = () => {
	
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
			title: "angel",
			link: "http://angel.com",
			tags: "GOD, angel, Jesus, believe",
			date: "2020-06-27"
		},
	];

  return (
		<>
			<GlobalStyle></GlobalStyle>
			<MainWrapper>
				<Title />
					<Form />
			</MainWrapper>
		</>
  );
};

const GlobalStyle = createGlobalStyle`
	* {
		box-sizing: border-box;
	};
	html, body {
		width: 100%;
		margin: 0;
		padding: 0;
	}
`;
const MainWrapper = styled.div`
	width: 100%;
	padding: 2%;
`;

export default App;
