import React from "react";
import styled from "styled-components";
import Grid from "../elements/Grid_01";
import Text from "../elements/Text_01";
import Circle from "../elements/Circle";
import ImageA from "../elements/ImageA";
import ImageB from "../elements/ImageB";
import ImageD from "../elements/ImageD";
import Input from "../elements/Input_01";
import InputC from "../elements/Input_03";
import CommentList from "../components/CommentList";
import apis from "../shared/apis";
import { postActions } from "../redux/modules/post";
import { commentActions } from "../redux/modules/comment";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { history } from "../redux/configureStore";
import { ContactSupportOutlined } from "@material-ui/icons";

const Detail = (props) => {
  const comment = React.useRef("1");
  const dispatch = useDispatch();

  // const username = useSelector((state) => state.user.username); // 새로고침시 리듀서 state 값 업어짐 -> 파라미터로 받음
  

  const params = useParams();
  const user_id = params.user_id;
  const username = params.username;
  const _article_id = Number(params.article_id);
  console.log(params);

  const article_info = useSelector((state) => {
    console.log(state.post.articleOne);
    return state.post.articleOne;
  });

  const [green, setGreen] = React.useState(false);
  const [red, setRed] = React.useState(false);

  console.log(_article_id);
  React.useEffect(() => {
    dispatch(postActions.getPostDetailDB(_article_id));
  }, [green, red]);

  const lightGDB = async () => {
    try {
      const response = await apis.greenLight(_article_id);
      console.log(response);
      setGreen(!green);
    } catch (err) {
      console.log(err);
    }
  };
  const lightLDB = async () => {
    try {
      const response = await apis.redLight(_article_id);
      console.log(response);
      setRed(!red);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <DetailPage>
      <Grid padding="33px 58px">
        <Title>
          <Circle />
          <Text>{article_info.type}</Text>
        </Title>
        <Grid flex right margin="20px 0">
          {username == user_id && (
            <React.Fragment>
              <ImageB
                _onClick={() => {
                  dispatch(postActions.deletePostDB(params.article_id));
                }}
              />
              <ImageA
                _onClick={() => {
                  console.log(`/edit/${_article_id}/${user_id}`);
                  history.push(`/edit/${_article_id}/${user_id}`);
                }}
              />
            </React.Fragment>
          )}
        </Grid>
        <Grid margin="0 0 30px 0">
          <Text>{article_info.nickname}</Text>
          <Text noto lighter margin="5px 0 0 0">
            {article_info.createDate}
          </Text>
        </Grid>
        <Grid>
          <Text noto righter opacity="40%">
            제목
          </Text>
          <Text padding="10px 0" border="1px solid #000">
            {article_info.title}
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
            {article_info.content}
          </Text>
        </Grid>
        <Grid flex padding="35px 0 ">
          <Grid flex center wrap>
            <Circle
              width="108px"
              height="108px"
              cursor="pointer"
              id="green"
              _onClick={lightGDB}
            >
              그린라이트
            </Circle>
            <Text margin="15px" noto>
              {article_info.greenCount}표
            </Text>
          </Grid>
          <Grid flex center wrap>
            <Circle
              width="108px"
              height="108px"
              color="#FF4B3A"
              cursor="pointer"
              id="red"
              _onClick={lightLDB}
            >
              레드라이트
            </Circle>
            <Text margin="15px" noto>
              {article_info.redCount}표
            </Text>
          </Grid>
        </Grid>
        <Grid relative={"relative"}>
          <InputC border={"none"} ref={comment} />
          <ImageD
            _onClick={() => {
              console.log(comment.current.value);
              dispatch(
                commentActions.addCommentDB(_article_id, comment.current.value)
              );
            }}
          />
          <CommentList />
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
