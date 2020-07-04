import React from "react";
import styled from "styled-components";
import Logic from "./logic.js";

const Select = ({ onChangeFunc }) => {
  const filterList = ["tag", "id", "title", "date"];

  return (
    <SelectWrapper>
      <SelectedValue
        id="selected-filter"
        data-filter-type="tag"
        onClick={(event) => Logic.dropDownAndUp(event)}
      >
        Search By (default is 'tag')
      </SelectedValue>
      <OptionsWrapper id="search-filter-list">
        {filterList.map((keyword) => {
          return (
            <Option
              key={keyword}
              data-value={keyword}
              onClick={(event) => {
                Logic.changeFilter(event);
                Logic.closeFilterList();
                onChangeFunc ? onChangeFunc(event.target.dataset.value) : null;
              }}
            >
              {keyword}
            </Option>
          );
        })}
      </OptionsWrapper>
    </SelectWrapper>
  );
};

const SelectWrapper = styled.section`
  flex: 1;
  text-align: center;
  position: relative;
`;

const SelectedValue = styled.label`
  width: 100%;
  padding: 3% 0;
  display: block;
  background-color: #f2ae30;

  &:hover {
    cursor: pointer;
  }
`;

const OptionsWrapper = styled.ul`
  width: 100%;
  display: none;
  padding: 0;
  margin: 0;
  flex-direction: column;
  justify-content: stretch;
  list-style-type: none;
  position: absolute;
  top: 100%;

  &.show {
    display: flex;
  }
`;

const Option = styled.li`
  display: block;
  background-color: #d96f32;
  border: none;
  padding: 3%;

  &:hover {
    background-color: #bf5630;
    cursor: pointer;
  }
`;

export default Select;
