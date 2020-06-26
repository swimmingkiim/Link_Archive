import React from "react";
import styled from "styled-components";

const Tag = ({ tagString = "" }) => {
  return (
    <div>
      <span>Tags : </span>
      {tagString !== ""
        ? tagString.split(", ").map((tag) => {
            return <span key={tag}>{tag}</span>;
          })
        : null}
    </div>
  );
};

export default Tag;
