import React from "react";

const Signup = (props) => {
 
  return (
    <React.Fragment>
       <h1>회원가입 페이지</h1>
    </React.Fragment>
  );
};

export default Signup;

/*
적용 순서
1. firebase.js에 만들어둔 auth 가져오기
2. 리덕스에서 signupFB 함수 만들기
3. auth.createUserWithEmailAndPassword()로 가입 시키기
4. Signup 컴포넌트에서 signupFB를 호출!
5. 가입한 후, display_name 바로 업데이트하기
6. 사용자 정보 업데이트 후에 메인 페이지로 이동하기
*/
