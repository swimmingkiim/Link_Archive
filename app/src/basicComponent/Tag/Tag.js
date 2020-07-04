import React from "react";
import styled from "styled-components";

const Tag = ({ tagString = "" }) => {
  return (
    <TagWrapper>
      <TagLabel>Tags : </TagLabel>
      {tagString !== ""
        ? tagString.split(", ").map((tag) => {
            return <SingleTag key={tag}>{tag}</SingleTag>;
          })
        : null}
    </TagWrapper>
  );
};

const TagWrapper = styled.ul`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	flex-wrap: wrap;
	list-style-type: none;
`;

const TagLabel = styled.label`
	width: fit-content;
	display: block;
	font-weight: 500;
	padding: .25% 1%;
`;

const SingleTag = styled.li`
	width: fit-content;
	display: block;
	padding: .25% 1%;
	border-radius: 10%;
	background-color: #EBD40B;
	text-align: center;

	& + & {
		margin-left: .5%;
	}
`;

export default Tag;
