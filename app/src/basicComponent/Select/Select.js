import React from "react";
import styled from "styled-components";

const Select = () => {
	return (
		<SelectWrapper id="search-selector">
			<Option val="filter-by-tag">tag</Option>
			<Option val="filter-by-id">id</Option>
			<Option val="filter-by-title">title</Option>
			<Option val="filter-by-date">date</Option>
		</SelectWrapper>
	);
};

const SelectWrapper = styled.select`
	width: 15%;
`;

const Option = styled.option`
	width: 100%;
	background-color: lightpink;
`;

export default Select;
