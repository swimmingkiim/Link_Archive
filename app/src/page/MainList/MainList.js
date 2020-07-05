import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import GlobContext from "../../state/globContext";
import Button from "../../basicComponent/Button";
import ListItem from "../../composedComponent/ListItem";
import SearchBar from "../../composedComponent/SearchBar";
import tagStringToTagArray from "../../utility/tagStringToTagArray";

const MainList = () => {
	
	const [ filterMode, setFilterMode ] = useState("tag");
	const [ filterString, setFilterString ] = useState("");
	const { currentState, store } = useContext(GlobContext);
	const linkList = Object.values(store);

	const handleFilterMode = (mode) => {
		setFilterMode(mode);
	};

	const handleFilterString = (userInput) => {
		setFilterString(userInput);
	}

	const filterDataList = (mode, string) => {
		return linkList.filter((data) => {
			if (data === undefined) return ;
			if (mode === "id") return data[mode] === Number(string);
			else if (mode === "tag") {
				const givenTags = tagStringToTagArray(data["tags"].toLowerCase());
				const userInputTags = tagStringToTagArray(string.toLowerCase());
				return userInputTags.every((tag) => givenTags.includes(tag));
			}	else return (data[mode] === string || data[mode].toLowerCase().includes(string.toLowerCase()));
		});
	};

	return (
		<MainListWrapper id="main-list" className={currentState.currentMode === "edit" ? "edit-mode" : null}>
			<SearchBar handleFilterMode={handleFilterMode} handleFilterString={handleFilterString}/>
			<ButtonWrapper>
				<Button type="edit" />
			</ButtonWrapper>
			{
				filterString !== ""
				? filterDataList(filterMode, filterString).map((data) => {
					return (
						<ListItem key={data.id} data={data} />
					);
				})
				: linkList.map((data) => {
					if (data) {
						return (
							<ListItem key={data.id} data={data} />
						);
					}
				})
			}
		</MainListWrapper>
	);
};

const MainListWrapper = styled.section`
	width: 100%;
	padding: 0;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: stretch;

	&.edit-mode {
		.update-button, .delete-button {
			display: block;
		}
	}
`;

const ButtonWrapper = styled.div`
	width: 100%;
	height: auto;
	text-align: right;
	margin: 2.5% 0;
`;

export default MainList;
