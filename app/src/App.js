import React, { useState, useEffect, useReducer } from "react";
import styled, { createGlobalStyle } from "styled-components";
import CurrentState from "./state/currentState";
import Store from "./state/store";
import GlobContext from "./state/globContext";
import Title from "../src/basicComponent/Title";
import MainList from "../src/page/MainList";
import Form from "../src/page/Form";

const App = () => {

	const [currentState, dispatchCurrentState] = useReducer(CurrentState.reducer, CurrentState.initialCurrentState);
	const [store, dispatchStore] = useReducer(Store.reducer, Store.initialStore);

	const clearCurrentState = () => {
		dispatchCurrentState({type: "clear"});
	}

	const createLinkData = () => {
		dispatchStore({
			type: "create",
			value: {
				...currentState.inputs,
				date: new Date(Date.now()).toJSON().split("T")[0]
			}
		});
		clearCurrentState();
	};
	const readLinkData = () => {
		const { title, link, tags } = store[currentState.updateId]
		dispatchCurrentState({
			type: "inputs",
			value: {
				name: "title",
				string: title
			}
		});
		dispatchCurrentState({
			type: "inputs",
			value: {
				name: "link",
				string: link
			}
		});
		dispatchCurrentState({
			type: "inputs",
			value: {
				name: "tags",
				string: tags
			}
		});
	};
	const updateLinkData = () => {
		dispatchStore({
			type: "update",
			value: {
				...currentState.inputs,
				date: new Date(Date.now()).toJSON().split("T")[0],
				id: currentState.updateId
			}
		});
		clearCurrentState();
	};
	const deleteLinkData = () => {
    if (window.confirm("Do you really want to delete this link?")) {
			dispatchStore({
				type: "delete",
				value: {
					id: currentState.updateId
				}
			});
    }
		clearCurrentState();
	};

	const applyChangeByCurrentMode = () => {
		switch (currentState.currentMode) {
			case "save":
				if (currentState.updateId === null) createLinkData();
				else updateLinkData();
				break;
			case "update":
				readLinkData();
				break;
			case "edit":
				dispatchCurrentState({type: "currentMode", value: "edit"});
				break;
			case "delete":
				deleteLinkData();
				break;
			default:
				null;
		};
	};

	useEffect(() => {
		applyChangeByCurrentMode();
	}, [currentState.currentMode]);

  return (
		<>
			<GlobalStyle></GlobalStyle>
			<MainWrapper>
				<Title />
				<GlobContext.Provider value={{currentState, dispatchCurrentState, store}}>
					<Form />
					<MainList />
				</GlobContext.Provider>
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
const MainWrapper = styled.main`
	width: 100%;
	padding: 2.5% 30%;

	@media only screen and (max-width: 1024px) {
		padding: 2.5% 10%;
	}
`;

export default App;
