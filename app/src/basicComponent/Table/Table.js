import React from "react";
import styled from "styled-components";

const Table = ({postId, title, date, link}) => {
	return (
		<ItemWrapper>
			<Data>{postId}</Data>
			<Link href={link} portion="5">{title}</Link>
			<Data>{date}</Data>
		</ItemWrapper>
	);
}

const ItemWrapper = styled.section`
	display: flex;
	flex-direction: row;
	justify-content: stretch;
	align-items: stretch;
	width: 100%;
	min-height: 2em;
`;

const Data = styled.p`
	flex: ${props => props.portion ? props.portion : "1"};
	font-size: 125%;
	text-align: center;
`;

const Link = styled.a`
	flex: ${props => props.portion ? props.portion : "1"};
	font-size: 125%;
	color: darkmagenta;
	text-align: center;
	text-decoration: none;
	border-left: 1px solid #000000;
	border-right: 1px solid #000000;
`;

export default Table;
