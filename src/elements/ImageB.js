import styled from "styled-components";
import React from "react";
import Group from "../images/Group.png";

const ImageB = (props) => {
  return <Img src={Group} onClick={props._onClick} float={props.float} id={props.id} />;
};

ImageB.defaultProps = {
  _onClick: () => {},
};

const Img = styled.img`
  display: inline-block;
  width: 18px;
  height: 18px;
  cursor: pointer;
  ${(props) => (props.float ? `float: ${props.float};` : "")}
`;

export default ImageB;
