import React from "react";
import styled from "styled-components";
import Select from "../../basicComponent/Select";

const SearchBar = ({ handleFilterMode, handleFilterString }) => {


	return (
		<SearchBarWrapper>
			<Select onChangeFunc={handleFilterMode}/>
			<Input
				placeholder="Type Your Keyword"
				id="search-string"
				onInput={(event) => handleFilterString(event.target.value)}
			/>
		</SearchBarWrapper>
	);
};

const SearchBarWrapper = styled.section`
	flex: auto;
	padding: 1% 0;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;

	section + input {
		margin-top: 2.5%;
	}
`;

const Input = styled.input`
	display: block;
	width: 100%;
	flex: auto;
	padding: .5%;
	font-size: 150%;
	border: 1px solid black;

	& + & {
		margin-top: 5%;
	}
`;

export default SearchBar;
