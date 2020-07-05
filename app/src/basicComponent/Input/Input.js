import React, { useContext } from "react";
import GlobContext from "../../state/globContext";
import styled from "styled-components"

const Input = ({ displayString="", uniqueId }) => {
	
	const { currentState, dispatchCurrentState } = useContext(GlobContext);

	return (
		<InputWrapper
			type="text"
			id={uniqueId}
			placeholder={displayString}
			value={currentState.inputs[uniqueId]}
			onChange={(event) => dispatchCurrentState({type: "inputs", value: { name: uniqueId, string: event.target.value }})}
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
