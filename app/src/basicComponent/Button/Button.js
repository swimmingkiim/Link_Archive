import React, { useContext } from "react";
import styled from "styled-components";
import GlobContext from "../../state/globContext";
import StyleConfig from "./styleConfig";

const Button = ({ type, updateId }) => {

	const { dispatchCurrentState } = useContext(GlobContext);

  return (
    <CustomButton
			className={type + "-button"}
      type="button"
			onClick={() => {
				dispatchCurrentState({type: "currentMode", value: type, ...(updateId) && {id: updateId}})
			}}
      styles={StyleConfig[type]}
    >
      {type}
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
