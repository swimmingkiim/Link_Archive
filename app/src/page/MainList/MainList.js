import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ListItem from "../../composedComponent/ListItem";
import SearchBar from "../../composedComponent/SearchBar";

const MainList = ({ dataList }) => {
	
	const [ filterMode, setFilterMode ] = useState("tag");
	const [ filterString, setFilterString ] = useState("");

	const handleFilterMode = (mode) => {
		setFilterMode(mode);
	};

	const handleFilterString = (userInput) => {
		setFilterString(userInput);
	}

	const filterDataList = (mode, string) => {
		return dataList.filter((data) => {
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
						<ListItem data={data} />
					);
				})
				: dataList.map((data) => {
					return (
						<ListItem data={data} />
					);
				})
			}
		</MainListWrapper>
	);
};

const MainListWrapper = styled.main`
	width: 100%;
	padding: 2%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: stretch;
`;

export default MainList;
