import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import LinkList from "../src/state/LinkList";
import Title from "../src/basicComponent/Title";
import MainList from "../src/page/MainList";
import Form from "../src/page/Form";

const App = () => {

	const [linkId, setLinkId] = useState(null);

  return (
		<>
			<GlobalStyle></GlobalStyle>
			<LinkList.Provider initialState={{}}>
				<MainWrapper>
					<Title />
					<Form linkId={linkId} resetLinkId={setLinkId}/>
					<MainList setLinkId={setLinkId} />
				</MainWrapper>
			</LinkList.Provider>
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
const MainWrapper = styled.main`
	width: 100%;
	padding: 2.5% 30%;

	@media only screen and (max-width: 1024px) {
		padding: 2.5% 10%;
	}
`;

export default App;
