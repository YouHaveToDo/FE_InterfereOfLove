import styled from "styled-components";
import React from "react";
import pen from "../images/pen.png";

const ImageD = (props) => {
  return <Img src={pen} onClick={props._onClick} />;
};

ImageD.defalutProps = {
  _onClick: () => {},
};

const Img = styled.img`
  position: absolute;
  right: 10px;
  top: 6px;
  display: inline-block;
  width: 18px;
  height: 18px;
  margin-left: 5px;
  cursor: pointer;
`;

export default ImageD;
