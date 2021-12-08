import styled from "styled-components";
import React from "react";
import Group from "../images/Group.png";

const ImageB = (props) => {
  return <Img src={Group} />;
};

const Img = styled.img`
  display: inline-block;
  width: 18px;
  height: 18px;
`;

export default ImageB;
