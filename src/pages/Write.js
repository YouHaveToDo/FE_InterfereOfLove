import React from "react";
import styled from "styled-components";
import Grid from "../elements/Grid_01";
import Text from "../elements/Text_01";
import Circle from "../elements/Circle";
import Input from "../elements/Input_01";
import ImageA from "../elements/ImageA";
import ImageB from "../elements/ImageB";
import Button from "../elements/Button_01";

const Detail = (props) => {
  return (
    <DetailPage>
      <Grid padding="33px 58px">
        <Title>
          <Text>글쓰기</Text>
        </Title>

        <Grid margin="65px 0 0 0">
          <Input placeholder="제목" />
        </Grid>
        <Grid padding="15px 0">
          <Input placeholder="내용을 입력하세요" height="300px" />
        </Grid>
        <Grid flex right padding="35px 0">
          <input type="radio" name="type" value="그린라이트" />
          <Text margin="4px 0 0 0" noto size="14px">
            그린라이트
          </Text>
          <input type="radio" name="type" value="그린라이트" />
          <Text margin="4px 0 0 0" noto size="14px">
            레드라이트
          </Text>
        </Grid>
        <Grid margin="160px 0 0 0">
          <Button></Button>
        </Grid>
      </Grid>
    </DetailPage>
  );
};

Detail.defaultProps = {
  children: null,
};

const DetailPage = styled.div`
  width: 100%;
  background-color: #fff;
  margin-top: 55px;
  height: 841px;
  border-radius: 30px;
`;
const Title = styled.div`
  width: 92px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
`;

export default Detail;
