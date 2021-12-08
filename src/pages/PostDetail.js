import React from "react";

const PostDetail = (props) => {
  return (
    <React.Fragment>
      <h1>게시판 상세페이지</h1>
    </React.Fragment>
  );
};

export default PostDetail;

/*
-----------------------------------------
= ,==, === 차이는 ?
-----------------------------------------
= (value값)

예: number=2
-----------------------------------------
== (value와 value를 비교)

예: a=10, b=5라고 할 때, a==b는 true
-----------------------------------------
===(value와 data type을 비교)

예 : a=10이라고 할 때, a === 10 은 true, a === "10"은 false
-----------------------------------------

<aside>
👉 **[링크를 타고 들어온다면...]**
우리가 만든 사이트에 게시글 1개 링크를 타고 들어온다고 생각해볼까요?
😖 : 앗, 파이어 스토어에서 데이터 가져오는 건... 목록 페이지인데? 

맞아요! 그럴 때는 데이터 가진 게 없으니 보여줄 게 없죠. 
이럴 때는 해당 게시글 id를 이용해서 게시글 정보 하나만 호다닥 가져오게 합시다!

</aside>

댓글 작성하기

<aside>
👉 댓글을 작성기능을 만들 때 어떤 순서로 만들면 될까요?
 → 댓글 작성하는 뷰를 만들고, 댓글 텍스트를 리덕스에 넣는 게 첫번째!
     그 다음으로는 파이어스토어에 저장하는 기능을 만들어서 진짜 저장까지 해주면 됩니다.

그런데, 우리 데이터를 보면 게시글 정보에도 댓글 갯수가 저장되고 있죠!
앗, 그럼 **댓글을 작성하면 게시글 정보에 있는 댓글 갯수도 +1** 해줘야겠네요!
댓글을 작성하면서 게시글 정보도 같이 수정하도록 해봅시다!

</aside>

*/
