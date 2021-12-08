import React from "react";
import styled from "styled-components";
import Grid from "../elements/Grid_01";
import Text from "../elements/Text_01";
import Circle from "../elements/Circle";
import ImageA from "../elements/ImageA";
import ImageB from "../elements/ImageB";

const Detail = (props) => {
  return (
    <DetailPage>
      <Grid padding="33px 58px">
        <Title>
          <Circle />
          <Text>그린라이트</Text>
        </Title>
        <Grid flex right margin="20px 0">
          <ImageB />
          <ImageA />
        </Grid>
        <Grid margin="0 0 30px 0">
          <Text>복학생 오빠</Text>
          <Text noto lighter margin="5px 0 0 0">
            12/06 22:52
          </Text>
        </Grid>
        <Grid>
          <Text noto righter opacity="40%">
            제목
          </Text>
          <Text padding="10px 0" border="1px solid #000">
            저에게 잘 웃는 후배, 그린 라이트 인가요?
          </Text>
        </Grid>
        <Grid padding="15px 0">
          <Text righter noto opacity="40%">
            내용
          </Text>
          <Text
            margin="20px 0 0 0"
            lineH="30px"
            border="1px solid #000"
            padding="0 0 20px 0"
          >
            동아리에서 만난 후배가 있습니다. 어느 순간부터 제 앞에서 웃는 모습을
            자주 보여줍니다.
            <br />.<br />.<br />.<br />.<br />.<br />.<br />.<br />
            ..... 이거 그린 라이트 인가요
          </Text>
        </Grid>
        <Grid flex padding="35px 0 ">
          <Grid flex center wrap>
            <Circle width="108px" height="108px">
              그린라이트
            </Circle>
            <Text margin="15px" noto>
              20표 (100%)
            </Text>
          </Grid>
          <Grid flex center wrap>
            <Circle width="108px" height="108px" color="#FF4B3A">
              레드라이트
            </Circle>
            <Text margin="15px" noto>
              0표 (0%)
            </Text>
          </Grid>
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
