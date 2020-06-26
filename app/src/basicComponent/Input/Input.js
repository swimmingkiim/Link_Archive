import React from "react";
import styled from "styled-components"

const Input = ({displayString, uniqueId}) => {
	return (
		<InputWrapper id={uniqueId} placeholder={displayString} />
	);
}

const InputWrapper = styled.input`
	width: 100;
	font-size: 125%;
	border: 1px solid black;
`;

export default Input;
