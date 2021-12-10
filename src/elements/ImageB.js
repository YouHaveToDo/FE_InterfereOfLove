import styled from "styled-components";
import React from "react";
import Group from "../images/Group.png";

const ImageB = (props) => {
  return <Img src={Group} onClick={props._onClick} />;
};

ImageB.defaultProps = {
  _onClick: () => {},
};

const Img = styled.img`
  display: inline-block;
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

export default ImageB;
