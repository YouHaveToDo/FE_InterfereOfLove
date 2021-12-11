import React from "react";
import styled from "styled-components";
import Text from "../elements/Text_01";
import Grid from "../elements/Grid_01";
import iconImage from "../images/greenlight_icon.png";

const Items = (props) => {
  // console.log(props.post_list);
  const { post_list, _onClick } = props;
  return (
    <Item onClick={_onClick}>
      <Grid margin="0 0 0 0" flex>
        <Icon src={iconImage}></Icon>
        <Grid padding="0 30px 0 10px">
          <Text color="#FA4A0C" size="10px">
            {post_list.type}
          </Text>
          <Text size="18px" margin="4px 0">
            {post_list.title}
          </Text>
          <Grid flex between>
            <Text size="10px" color="#ccc">
              {post_list.nickname}
            </Text>
            <Text size="10px;" color="#ccc">
              {post_list.createDate}
            </Text>
          </Grid>
        </Grid>
      </Grid>
    </Item>
  );
};

const Icon = styled.img`
  width: 47px;
  height: 47px;
  border-radius: 10px;
  /* background-image: url("../images/greenlight_icon.png"); */
  /* background-color: yellow; */
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
