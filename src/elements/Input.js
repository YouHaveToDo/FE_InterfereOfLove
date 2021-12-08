import React from "react";
import styled from "styled-components";
import { Text, Grid } from "./index";

const Input = (props) => {
  const {
    label,
    placeholder,
    _onChange,
    type,
    multiLine,
    value,
    Pcolor,
    BT,
    TR,
  } = props;

  if (multiLine) {
    return (
      <Grid>
        {label && <Text margin="0">{label}</Text>}
        <ElTextarea
          rows={10}
          value={value}
          placeholder={placeholder}
          onChange={_onChange}
        ></ElTextarea>
      </Grid>
    );
  }

  return (
    <React.Fragment>
      <Grid>
        {label && <Text margin="0">{label}</Text>}
        <ElInput
          Pcolor={Pcolor}
          BT={BT}
          TR={TR}
          type={type}
          placeholder={placeholder}
          onChange={_onChange}
        />
      </Grid>
    </React.Fragment>
  );
};

Input.defaultProps = {
  multiLine: false,
  label: false,
  placeholder: "",
  type: "text",
  value: "",
  Pcolor: false,
  TR: false,
  _onChange: () => {},
};

const ElTextarea = styled.textarea`
  border: 1px solid #212121;
  width: 100%;
  padding: 12px 4px;
`;

const ElInput = styled.input`
  border: none;
  font-size: 17px;
  border-bottom: 1px solid #efefef;
  background-color: transparent;
  width: 100%;
  padding: 8px 2px;
  font-weight: bold;
  ${(props) => (props.Pcolor ? `color: ${props.Pcolor};` : "")}

  &:focus {
    outline: none;
    ${(props) => (props.BT ? `border-bottom: ${props.BT};` : "")}
    ${(props) => (props.Pcolor ? `color: ${props.Pcolor};` : "")}
    transition: 0.85s;
  }
`;

export default Input;
