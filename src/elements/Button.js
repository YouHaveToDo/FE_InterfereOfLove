import React from "react";
import styled from "styled-components";

const Button = (props) => {
  return <ElButton>완료</ElButton>;
};

const ElButton = styled.button`
  width: 100%;
  height: 70px;
  border-radius: 30px;
  background-color: #fa4a0c;
  border: none;
  color: #fff;
  font-family: BMDOHYEON;
  font-size: 17px;
`;

export default Button;