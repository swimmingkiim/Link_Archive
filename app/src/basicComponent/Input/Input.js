import React from "react";
import styled from "styled-components"

const Input = ({displayString="", uniqueId, onChangeFunc=null}) => {
	return (
		<InputWrapper
			type={uniqueId === "updateId" ? "hidden" : "text" }
			id={uniqueId}
			placeholder={displayString}
			onChange={(event) => onChangeFunc ? onChangeFunc(event.target.value) : null}
		/>
	);
}

const InputWrapper = styled.input`
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

export default Input;
