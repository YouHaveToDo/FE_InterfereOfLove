import React from "react";
import styled from "styled-components";

const Circle = (props) => {
  const {
    color,
    width,
    children,
    margin,
    height,
    space,
    cursor,
    _onClick,
    id,
  } = props;
  const styles = {
    color,
    width,
    margin,
    height,
    space,
    cursor,
  };
  return (
    <CircleRound {...styles} onClick={_onClick} id={id}>
      {children}
    </CircleRound>
  );
};

Circle.defaultProps = {
  children: null,
  color: "#7DC579",
  width: "16px",
  height: "16px",
  margin: false,
  space: false,
  cursor: "default",
  _onClick: () => {},
};

const CircleRound = styled.div`
  line-height: ${(props) => props.height};
  font-size: 14px;
  font-family: Noto;
  font-weight: bold;
  text-align: center;
  color: #fff;
  background-color: ${(props) => props.color};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  border-radius: 50%;
  ${(props) => (props.cursor ? `cursor: ${props.cursor};` : "")}
`;

export default Circle;
