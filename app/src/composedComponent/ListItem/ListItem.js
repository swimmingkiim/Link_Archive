import React from "react";
import styled from "styled-components";
import Button from "../../basicComponent/Button";
import Table from "../../basicComponent/Table";
import Tag from "../../basicComponent/Tag";

const ListItem = ({ data }) => {

	const { id, title, link, tags, date } = data;
	
	return (
		<ListItemWrapper>
			<Table info={{id, link, title, date}}/>
			<Tag tagString={tags}/>
			<Button type="update" updateId={id} />
			<Button type="delete" updateId={id} />
		</ListItemWrapper>
	);
};

const ListItemWrapper = styled.div`
	border: 1px solid black;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	& + & {
		margin-top: 2.5%;
	}

	& > button {
		display: none;
	}
`;

export default ListItem;
