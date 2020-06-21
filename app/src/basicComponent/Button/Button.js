import React from "react";
import styled from "styled-components";
import styleConfig from "./styleConfig";

const Button = ({ type, onClickFunc = null }) => {
  return (
    <CustomButton
      type={type === "submit" ? type : "button"}
      onClick={onClickFunc}
      styles={styleConfig[type]}
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
