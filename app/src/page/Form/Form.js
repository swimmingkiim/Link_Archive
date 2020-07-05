import React, { useState, useContext } from "react";
import styled from "styled-components";
import GlobContext from "../../state/globContext";
import Button from "../../basicComponent/Button";
import Input from "../../basicComponent/Input";

const Form = () => {

	const inputList = [
		{
			displayString: "Title",
			uniqueId: "title",
		},
		{
			displayString: "Full Link",
			uniqueId: "link",
		},
		{
			displayString: "Tags(divided by comma ',')",
			uniqueId: "tags",
		}
	];

	return (
		<MainWrapper>
			<FormWrapper>
				<Input
					displayString={inputList[0].displayString}
					uniqueId={inputList[0].uniqueId}
				/>
				<Input
					displayString={inputList[1].displayString}
					uniqueId={inputList[1].uniqueId}
				/>
				<Input
					displayString={inputList[2].displayString}
					uniqueId={inputList[2].uniqueId}
				/>
				<ButtonWrapper>
					<Button type="save" />
				</ButtonWrapper>
			</FormWrapper>
		</MainWrapper>		
	);
};

const MainWrapper = styled.section`
	width: 100%;
	padding: 0;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: stretch;
	position: relative;
`;

const FormWrapper = styled.form`
	flex: 1;

	input + div {
		margin-top: 5%;
	}
`;

const ButtonWrapper =  styled.div`
	flex: 1;
	display: flex;
	flex-direction: row-reverse;
	justify-content: space-between;
	align-items: center;
`;

export default Form;
