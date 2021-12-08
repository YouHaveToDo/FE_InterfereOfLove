import styled from "styled-components";
import React from "react";
import Vector from "../images/Vector.png";

const ImageA = (props) => {
  return <Img src={Vector} />;
};

const Img = styled.img`
  display: inline-block;
  width: 18px;
  height: 18px;
  margin-left: 5px;
`;

export default ImageA;
