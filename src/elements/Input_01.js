import React from "react";
import styled from "styled-components";

const Input = React.forwardRef(
  ({ borderB, placeholder, height, value, _onClick, children }, ref) => {
    return (
      <ElTextarea
        borderB={borderB}
        placeholder={placeholder}
        height={height}
        ref={ref}
        onClick={_onClick}
      >
        {children}
      </ElTextarea>
    );
  }
);

Input.defaultProps = {
  borderB: "1px solid #333",
  value: "이상한 선배",
  children: null,
  _onClick: () => {},
  _onChange: () => {},
};
const ElTextarea = styled.textarea`
  border: none;
  width: 100%;
  ${(props) => (props.height ? `height: ${props.height};` : "")}
  ${(props) => (props.borderB ? `border-bottom: ${props.borderB};` : "")}
`;

export default Input;
