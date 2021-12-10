import React from "react";
import styled from "styled-components";
import Text from "../elements/Text_01";
import Grid from "../elements/Grid_01";

const Items = (props) => {
  return (
    <Item>
      <Grid margin="0 0 0 0" flex>
        <Icon></Icon>
        <Grid padding="0 30px 0 10px">
          <Text color="#FF4B3A" size="2px">
            고민상담
          </Text>
          <Text color="#555555" size="18px" margin="5px 0">
            50대 썸녀.... 이 관계 괜찮은걸...
          </Text>
          <Grid flex between>
            <Text size="10px" color="#ccc">
              마포구꿀주먹
            </Text>
            <Text size="10px;" color="#ccc">
              2021. 12. 06 10:00
            </Text>
          </Grid>
        </Grid>
      </Grid>
    </Item>
  );
};

const Icon = styled.div`
  width: 47px;
  height: 47px;
  border-radius: 10px;
  background-color: yellow;
`;

const Item = styled.div`
  width: 100%;
  height: 86px;
  padding: 20px 0 20px 28px;
  border-radius: 15px;
  margin-top: 20px;
  box-shadow: 0px 5px 7px rgba(255, 75, 58, 0.3);
`;

export default Items;
