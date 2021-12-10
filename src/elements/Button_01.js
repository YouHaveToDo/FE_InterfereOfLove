import React from "react";
import styled from "styled-components";

const Button = (props) => {

  return <ElButton onClick={props._onClick}>완료</ElButton>;
};

Button.defaultProps = {
  _onClick: () => {},

};

const ElButton = styled.button`
  width: 100%;
  height: 70px;
  border-radius: 30px;
  background-color: #FF4B3A;
  border: none;
  color: #fff;
  font-family: BMDOHYEON;
  font-size: 17px;
`;

export default Button;
