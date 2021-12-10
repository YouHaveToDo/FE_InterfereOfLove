import React from "react";
import styled from "styled-components";

const Input = React.forwardRef(({ placeholder, height, children }, ref) => {
  return (
    <ElTextarea placeholder={placeholder} height={height} ref={ref}>
      {children}
    </ElTextarea>
  );
});

Input.defaultProps = {
  value: "이상한 선배",
  children: null,
};
const ElTextarea = styled.input`
  width: 100%;
  border-radius: 10px;
  height: 30px;
  border: none;
  background-color: #f1f1fa;
  ${(props) => (props.height ? `height: ${props.height};` : "")};
`;

export default Input;
