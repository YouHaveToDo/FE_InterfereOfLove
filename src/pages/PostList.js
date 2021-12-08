// PostList.js
import React from "react";

const PostList = (props) => {
 
  return (
    <React.Fragment>
      <h1>게시판 페이지</h1>
    </React.Fragment>
  );
};

export default PostList;
/*

포스트 목록 가져오기

👉 게시글 목록을 나눠서 가져오고, 목록에 게시글 추가하기 위한 준비되셨나요! 😎 

**[여기서 잠깐!]**
우리는 목록을 가져오고 게시글을 추가하고, 수정도 하겠죠! 
이런 기능을 만들 때는 데이터가 어떻게 변할 지 먼저 고민하고 만들기 시작하는 습관을 길러봐요! 🙂 

예)
**- 추가를 하면,**
   → post_list 배열에 포스트 게시글 딕셔너리가 하나 추가

**- 수정을 하면,**
   → post_list 안의 post 딕셔너리의 id로 게시글을 찾고, 게시글 내용하고 이미지 url을 수정 (다른 건 수정 못하게 하자!)

   **- 삭제를 하면,**
   → post_list 안의 post 딕셔너리의 id로 게시글을 찾고, 찾은 걸 배열에서 삭제

   **- 가져오기를 하면,**
   → post_list를 전달


*/
