import React from "react";
import styled from "styled-components";
import Text from "../elements/Text";
import Grid from "../elements/Grid";
import Items from "./Item";
const List = (props) => {
  return (
    <Ellist>
      <Grid padding="20px">
        <Text margin="0 0 0 5px" color="#FF4B3A">
          오늘의 참견 리스트 👀
        </Text>
        <Items></Items>
      </Grid>
    </Ellist>
  );
};
// 주석
const Ellist = styled.div`
  width: 100%;
  background-color: #fff;
  height: 586px;
  border-radius: 30px;
  position: absolute;
  bottom: 0;
`;

export default List;
