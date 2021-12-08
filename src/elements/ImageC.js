import styled from "styled-components";
import React from "react";
import Main from "../images/main.png";

const ImageC = (props) => {
  return <Img src={Main} />;
};

const Img = styled.img`
  display: inline-block;
  margin-left: -32px;
  margin-top: -30px;
`;

export default ImageC;
