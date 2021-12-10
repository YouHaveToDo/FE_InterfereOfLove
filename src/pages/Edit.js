import React from "react";
import styled from "styled-components";
import Grid from "../elements/Grid_01";
import Text from "../elements/Text_01";
import Circle from "../elements/Circle";
import Input from "../elements/Input_01";
import ImageA from "../elements/ImageA";
import ImageB from "../elements/ImageB";
import Button from "../elements/Button_01";

import { postActions } from "../redux/modules/post";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const Edit = (props) => {
  const title = React.useRef(null);
  const contents = React.useRef(null);
  const dispatch = useDispatch();
  const params = useParams();
  const article_id = params.article_id;
  console.log(params.article_id);
  React.useEffect(() => {
    dispatch(postActions.getPostDetailDB(article_id));
  }, []);
  const article_info = useSelector((state) => {
    console.log(state);
    return state.post.articleOne;
  });
  return (
    <EditPage>
      <Grid padding="33px 58px">
        <Title>
          <Text>수정</Text>
        </Title>

        <Grid margin="65px 0 0 0">
          <Input placeholder="제목" ref={title}>
            {article_info.title}
          </Input>
        </Grid>
        <Grid padding="15px 0">
          <Input placeholder="내용을 입력하세요" height="300px" ref={contents}>
            {article_info.content}
          </Input>
        </Grid>
        <Grid margin="210px 0 0 0">
          <Button
            _onClick={() => {
              const article_infos = {
                title: title.current.value,
                content: contents.current.value,
              };
              console.log(article_infos);
              dispatch(postActions.updatePostDB(article_id, article_infos));
            }}
          ></Button>
        </Grid>
      </Grid>
    </EditPage>
  );
};

Edit.defaultProps = {
  children: null,
};

const EditPage = styled.div`
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

export default Edit;
