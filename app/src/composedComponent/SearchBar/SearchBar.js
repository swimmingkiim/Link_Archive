import React from "react";
import styled from "styled-components";
import Input from "../../basicComponent/Input";
import Select from "../../basicComponent/Select";

const SearchBar = ({ handleFilterMode, handleFilterString }) => {


	return (
		<SearchBarWrapper>
			<Select onChangeFunc={handleFilterMode}/>
			<Input
				displayString="Type Your Keyword"
				uniqueId="search-string"
				onChangeFunc={handleFilterString}
			/>
		</SearchBarWrapper>
	);
};

const SearchBarWrapper = styled.section`
	flex: auto;
	padding: 1% 0;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	section + input {
		margin-left: 2.5%;
	}
`;

export default SearchBar;
