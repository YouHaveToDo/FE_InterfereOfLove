import styled from "styled-components";
import React from "react";
import Main from "../images/main.png";

const ImageC = (props) => {
  return <Img src={Main} />;
};

const Img = styled.img`
  display: inline-block;
  position: absolute;
  top: -1.5vh;
  left: -48px;
  background-color: #FF4B3A;
`;

export default ImageC;
