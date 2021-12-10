import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const {
    text,
    _onClick,
    is_signup,
    is_signupTwo,
    is_hello,
    children,
    margin,
    padding,
    bgColor,
    color,
    disabled,
  } = props;

  const styles = {
    margin: margin,
    padding: padding,
    bgColor: bgColor,
    color: color,
    disabled: disabled,
  };

  if (is_hello) {
    return (
      <React.Fragment>
        <HelloBtn {...styles} onClick={_onClick}>
          {text ? text : children}
        </HelloBtn>
      </React.Fragment>
    );
  }

  if (is_signup) {
    return (
      <React.Fragment>
        <SignupBtn {...styles} onClick={_onClick}>
          {text ? text : children}
        </SignupBtn>
      </React.Fragment>
    );
  }

  if (is_signupTwo) {
    return (
      <React.Fragment>
        <SignupBtnTwo {...styles} onClick={_onClick}>
          {text ? text : children}
        </SignupBtnTwo>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <ElButton {...styles} onClick={_onClick}>
        {text ? text : children}
      </ElButton>
    </React.Fragment>
  );
};

Button.defaultProps = {
  text: false,
  children: null,
  _onClick: () => {},
  is_signup: false,
  is_signupTwo: false,
  is_hello: false,
  margin: false,
  padding: false,
  bgColor: false,
  color: false,
  disabled: false,
};

const ElButton = styled.button`
  letter-spacing: 0.03rem;
  font-size: 15px;
  font-family: "BMDOHYEON";
  box-shadow: 0px 5px 10px rgba(255, 75, 58, 0.3);
  width: 18.5rem;
  height: 4rem;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  padding: ${(props) => props.padding};
  box-sizing: border-box;
  border: none;
  border-radius: 30px;
  padding: ${(props) => props.padding};
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")};

  &:hover {
    box-shadow: 0px 5px 10px rgba(255, 75, 58, 0.75);
    transition: 0.5s;
  }

  &:not(:hover) {
    box-shadow: 0px 3px 8px rgba(255, 75, 58, 0.3);
    transition: 0.5s;
  }
`;

const HelloBtn = styled(ElButton)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 7vh;

  &:hover {
    background-color: #ff6b5e;
    color: #fff;
    transition: 0.5s;
  }

  &:not(:hover) {
    transition: 0.5s;
  }
`;

const SignupBtn = styled(ElButton)`
  &:hover {
    background-color: #ff6b5e;
    color: #fff;
    transition: 0.5s;
  }

  &:not(:hover) {
    transition: 0.5s;
  }
`;

const SignupBtnTwo = styled(ElButton)`
  &:hover {
    background-color: #ccc;
    color: #fff;
    transition: 0.5s;
  }

  &:not(:hover) {
    transition: 0.5s;
  }
`;

export default Button;
