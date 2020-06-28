import React from "react";
import styled from "styled-components";
import Button from "../../basicComponent/Button";
import Input from "../../basicComponent/Input";

const Form = ({ mode="new", linkId=null }) => {
	
	const inputList = [
		{
			displayString: "Title",
			uniqueId: `${mode}-title`,
		},
		{
			displayString: "Full Link",
			uniqueId: `${mode}-link`,
		},
		{
			displayString: "Tags(divided by comma ',')",
			uniqueId: `${mode}-tags`,
		}
	];

	return (
		<MainWrapper>
			<FormWrapper>
				{
					inputList.map((item) => {
						return (
							<Input key={item.uniqueId} displayString={item.displayString} uniqueId={item.uniqueId} />
						);
					})
				}
				<ButtonWrapper>
					<Button type="goBack" />
					<Button type="save" />
				</ButtonWrapper>
			</FormWrapper>
		</MainWrapper>		
	);
};

const MainWrapper = styled.main`
	width: 100%;
	padding: 0 10%;
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
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

export default Form;
