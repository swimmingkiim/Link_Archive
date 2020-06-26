import React from "react";
import styled from "styled-components";
import StyleConfig from "./styleConfig";
import Logic from "./logic";

const Button = ({ type, updateId = null }) => {
  return (
    <CustomButton
      type={type === "save" ? "submit" : "button"}
      data-post-id={String(updateId)}
      onClick={(event) => Logic[type](event)}
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
  background-color: ${(props) => props.styles.bgColor};
`;

export default Button;
