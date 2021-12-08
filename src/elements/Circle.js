import React from "react";
import styled from "styled-components";

const Circle = (props) => {
  const { color, width, children, margin, height, space } = props;
  const styles = {
    color,
    width,
    margin,
    height,
    space,
  };
  return <CircleRound {...styles}>{children}</CircleRound>;
};

Circle.defaultProps = {
  children: null,
  color: "#7DC579",
  width: "16px",
  height: "16px",
  margin: false,
  space: false,
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
  ${(props) => (props.space ? `justify-content: space-evenly;` : "")}
  border-radius: 50%;
`;

export default Circle;
