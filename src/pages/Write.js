import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { postActions } from "../redux/modules/post";
import styled from "styled-components";

import Grid from "../elements/Grid_01";
import Text from "../elements/Text_01";
import Circle from "../elements/Circle";
import Input from "../elements/Input_01";
import ImageA from "../elements/ImageA";
import ImageB from "../elements/ImageB";
import Button from "../elements/Button_01";

const Write = (props) => {
  const dispatch = useDispatch();

  const [type, setType] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");

  const changeType = (e) => {
    setType(e.target.value);
  };

  const changeTitle = (e) => {
    setTitle(e.target.value);
  };

  const changeContent = (e) => {
    setContent(e.target.value);
  };

  console.log(type, title, content)

  const post_info = {
    type: type,
    title: title,
    content: content,
  };
  
  const addPost = () => {
    if(!post_info.title){
      window.alert("제목 입력해주세요!!😎");
      return;
    }else if(!post_info.content) {
      window.alert("내용 입력해 주세요!!😎");
      return;
    }else if(!post_info.type) {
      window.alert("그린라이트 or 고민상담소 체크 해주세요!!😎");
      return;
    }

    dispatch(postActions.addPostDB(post_info));
  };

  React.useEffect(() => {});

  return (
    <DetailPage>
      <Grid padding="33px 58px">
        <Title>
          <Text>글쓰기</Text>
        </Title>

        <Grid margin="65px 0 0 0">
          <Input placeholder="제목" _onChange={changeTitle} />
        </Grid>
        <Grid padding="15px 0">
          <Input
            placeholder="내용을 입력하세요"
            height="300px"
            _onChange={changeContent}
          />
        </Grid>
        <Grid flex right padding="35px 0">
          <input
            type="radio"
            name="type"
            value="그린라이트"
            onChange={changeType}
          />
          <Text margin="4px 0 0 0" noto size="14px">
            그린라이트
          </Text>
          <input
            type="radio"
            name="type"
            value="고민상담소"
            onChange={changeType}
          />
          <Text margin="4px 0 0 0" noto size="14px">
            고민상담소
          </Text>
        </Grid>
        <Grid margin="160px 0 0 0">
          <Button 
          _onClick={addPost}
          />
        </Grid>
      </Grid>
    </DetailPage>
  );
};

Write.defaultProps = {
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

export default Write;
