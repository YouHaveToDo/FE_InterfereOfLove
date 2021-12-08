import React from "react";
import styled from "styled-components";

const Text = (props) => {
  const {
    bold,
    color,
    size,
    children,
    margin,
    normal,
    lighter,
    noto,
    opacity,
    padding,
    border,
    lineH,
  } = props;
  const styles = {
    bold,
    color,
    size,
    margin,
    normal,
    lighter,
    noto,
    opacity,
    padding,
    border,
    lineH,
  };
  return <P {...styles}>{children}</P>;
};

Text.defaultProps = {
  children: null,
  bold: false,
  color: "#222831",
  size: "14px",
  margin: false,
  normal: false,
  lighter: false,
  noto: false,
  opacity: "100%",
  padding: false,
  border: false,
  lineH: false,
};

const P = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  ${(props) => (props.lineH ? `line-height: ${props.lineH};` : "")};
  ${(props) => (props.border ? `border-bottom: ${props.border};` : "")};
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")};
  ${(props) => (props.opacity ? `opacity: ${props.opacity};` : "")};
  ${(props) => (props.bold ? `font-weight: bold;` : "")};
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  ${(props) => (props.noto ? `font-family: Noto;` : "")}
  ${(props) => (props.normal ? `font-weight: normal;` : "")}
  ${(props) => (props.lighter ? `font-weight: lighter;` : "")}
`;

export default Text;
