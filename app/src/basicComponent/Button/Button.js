import React from "react";
import styled from "styled-components";
import LinkList from "../../state/LinkList";
import StyleConfig from "./styleConfig";
import Logic from "./logic";

const Button = ({ type, updateId=null, data=null }) => {

	const linkList = LinkList.useContainer();

  return (
    <CustomButton
			className={type + "-button"}
      type={"button"}
      data-post-id={String(updateId)}
      onClick={() => {
					if (type === "save") Logic[type](data, linkList);
					else if (type === "delete" || type === "update") Logic[type](updateId, linkList);
					else Logic[type]();
				}
			}
      styles={StyleConfig[type]}
    >
      {type !== "goBack" ? type : "go back"}
    </CustomButton>
  );
};

const CustomButton = styled.button`
  width: fit-content;
  height: auto;
  padding: 1%;
  letter-spacing: 0.25em;
  border: none;
  border-radius: 10%;
  color: #ffffff;
	font-size: 125%;
  background-color: ${(props) => props.styles.bgColor};
`;

export default Button;
