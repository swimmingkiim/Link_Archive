import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../basicComponent/Button";
import Input from "../../basicComponent/Input";

const Form = () => {
	
	const [titleInput, setTitleInput] = useState("");
	const [linkInput, setLinkInput] = useState("");
	const [tagsInput, setTagsInput] = useState("");

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
					onChangeFunc={setTitleInput}
				/>
				<Input
					displayString={inputList[1].displayString}
					uniqueId={inputList[1].uniqueId}
					onChangeFunc={setLinkInput}
				/>
				<Input
					displayString={inputList[2].displayString}
					uniqueId={inputList[2].uniqueId}
					onChangeFunc={setTagsInput}
				/>
				<ButtonWrapper>
					<Button type="save"
						data={
							{
								title: titleInput,
								link: linkInput,
								tags: tagsInput,
								date: new Date(Date.now()).toJSON().split("T")[0]
							}
						} 
					/>
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
