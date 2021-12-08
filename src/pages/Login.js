import React from "react";


const Login = (props) => {
  return (
    <React.Fragment>
      <h1>로그인페이지</h1>
    </React.Fragment>
  );
};

export default Login;


/*
로그인 : 우리 서버에 로그인 요청을 보내고, 응답을 받아서 토큰을 저장하면 끝입니다.

적용 순서
1. firebase.js에 만들어둔 auth 가져오기
2. 리덕스에서 loginFB 함수 만들기
3. auth.signInWithEmailAndPassword()로 로그인
4. Login 컴포넌트에서 loginFB를 호출!
5. 리덕스의 user 정보 업데이트 후에 메인 페이지로 이동하기
---------------------------------------------------------------------------------------
로그인 유지하기

로그인 유지하기 (feat.Permit.js, session)

👉 이제 쿠키에 로그인 유무를 저장하지 않죠! 파이어베이스 auth를 통해 관리하고 있으니까요. 🙂 
그럼, 페이지가 새로고침 되었을 때 로그인은 어떻게 유지하면 좋을까요?

i) 로그인 시, 세션에 로그인 상태를 기록하도록 바꿔줍니다.
ii) firebase 인증 키를 export 해줍니다.
iii) 세션을 체크해서 로그인 상태를 유지합시다!
iv) 혹은? 파이어베이스를 통해 로그인 한 상태가 맞나 확인해야죠! 
     맞다면 → 유저 정보를 가져다가 넣어줘야하니까요!
     
*/