import React from "react";
import styled from "styled-components"

const Input = ({displayString, uniqueId, onChangeFunc}) => {
	return (
		<InputWrapper id={uniqueId} placeholder={displayString} onChange={(event) => onChangeFunc(event.target.value)} />
	);
}

const InputWrapper = styled.input`
	flex: auto;
	padding: .5%;
	font-size: 150%;
	border: 1px solid black;
`;

export default Input;
