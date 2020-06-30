import React, { useState, useEffect } from "react";
import styled from "styled-components";
import LinkList from "../../state/LinkList";
import Button from "../../basicComponent/Button";
import ListItem from "../../composedComponent/ListItem";
import SearchBar from "../../composedComponent/SearchBar";

const MainList = () => {
	
	const [ filterMode, setFilterMode ] = useState("tag");
	const [ filterString, setFilterString ] = useState("");
	const linkList = LinkList.useContainer();

	const handleFilterMode = (mode) => {
		setFilterMode(mode);
	};

	const handleFilterString = (userInput) => {
		setFilterString(userInput);
	}

	const filterDataList = (mode, string) => {
		return linkList.readLinkList().filter((data) => {
			if (mode === "id") return data[mode] === Number(string);
			else if (mode === "tag") return data["tags"].toLowerCase().includes(string.toLowerCase());
			else return (data[mode] === string || data[mode].toLowerCase().includes(string.toLowerCase()));
		});
	};

	return (
		<MainListWrapper>
			<SearchBar handleFilterMode={handleFilterMode} handleFilterString={handleFilterString}/>
			{
				filterString !== ""
				? filterDataList(filterMode, filterString).map((data) => {
					return (
						<ListItem key={data.id} data={data} />
					);
				})
				: linkList.readLinkList().map((data) => {
					if (data) {
						return (
							<ListItem key={data.id} data={data} />
						);
					}
				})
			}
			<Button type="edit" />
		</MainListWrapper>
	);
};

const MainListWrapper = styled.main`
	width: 100%;
	padding: 0 10%;
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

export default MainList;
