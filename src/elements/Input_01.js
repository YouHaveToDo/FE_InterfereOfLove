import React from "react";
import styled from "styled-components";

const Input = (props) => {
  const { borderB } = props;
  return (
    <ElTextarea
      borderB={borderB}
      placeholder={props.placeholder}
      height={props.height}
    />
  );
};
Input.defaultProps = {
  borderB: "1px solid #333",
};
const ElTextarea = styled.textarea`
  border: none;
  width: 100%;
  ${(props) => (props.height ? `height: ${props.height};` : "")}
  ${(props) => (props.borderB ? `border-bottom: ${props.borderB};` : "")}
`;

export default Input;
