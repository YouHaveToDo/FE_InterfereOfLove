import React from "react";
import styled, { keyframes } from "styled-components";
import { Grid, Text, Input, Button } from "../elements/index_02";
import { history } from "../redux/configureStore";
import signBG from "../images/signup_bg.png";

import { actionCreators as userActions } from "../redux/modules/user";
import { useDispatch } from "react-redux";
import { usernameCheck, nicknameCheck, passwordCheck } from "../shared/Common";

const Signup = (props) => {
  const dispatch = useDispatch();

  const [username, setId] = React.useState("");
  const [nickname, setUName] = React.useState("");
  const [password, setPwd] = React.useState("");
  const [password2, setPwd2] = React.useState("");

  const signup = () => {
    // 유저 정보 입력란 공백 체크
    if (
      username === "" ||
      password === "" ||
      nickname === "" ||
      password2 === ""
    ) {
      window.alert("아이디, 닉네임, 패스워드 모두 입력해주세요 🥸");
      return;
    }
    // 유저 아이디 체크
    if (!usernameCheck(username)) {
      window.alert(
        "아이디: 영소문 / 숫자 혼합 3~12자 입력해주세요 🥸  공백은 ❎"
      );
      return;
    }
    // 유저 닉네임 체크
    if (!nicknameCheck(nickname)) {
      window.alert("닉네임: 한글 / 영문 / 숫자 3~10자 입력해주세요 🥸");
      return;
    }
    // 유저 비밀번호 체크
    if (!passwordCheck(password)) {
      window.alert(
        "비밀번호: 영대소문 / 숫자 / 특수문자 혼합 4~12자 입력해주세요 🥸"
      );
      return;
    }
    // 유저 비밀번호 일치 체크
    if (password !== password2) {
      window.alert("패스워드가 일치하지 않습니다 🥸");
      return;
    }

    dispatch(userActions.signupDB(username, nickname, password, password2));
  };

  return (
    <React.Fragment>
      <SigupBG>
        <SignupBox>
          <SignupTitle>연애의 참견</SignupTitle>
          <SignupForm>
            <Grid>
              <Text size="12px" color="#efefef">
                아이디
              </Text>
              <Input
                Pfont="20px"
                TR="0.5s"
                BT="1.5px solid #ffffff"
                Pcolor="#fff"
                type="text"
                placeholder=""
                _onChange={(e) => {
                  setId(e.target.value);
                }}
              />
            </Grid>
            <Grid margin="1.5rem 0">
              <Text size="12px" color="#fff">
                닉네임
              </Text>
              <Input
                Pfont="20px"
                TR="0.5s"
                BT="1px solid #ffffff"
                Pcolor="#fff"
                type="text"
                placeholder=""
                _onChange={(e) => {
                  setUName(e.target.value);
                }}
              />
            </Grid>
            <Grid margin="0 0 1.5rem 0">
              <Text size="12px" color="#fff">
                비밀번호
              </Text>
              <Input
                Pfont="20px"
                TR="0.5s"
                BT="1px solid #ffffff"
                FF="Open Sans"
                type="password"
                Pcolor="#fff"
                placeholder=""
                _onChange={(e) => {
                  setPwd(e.target.value);
                }}
              />
            </Grid>
            <Grid margin="0">
              <Text size="12px" color="#fff">
                비밀번호 확인
              </Text>
              <Input
                Pfont="20px"
                TR="0.5s"
                BT="1px solid #ffffff"
                Pcolor="#fff"
                FF="Open Sans"
                type="password"
                placeholder=""
                _onChange={(e) => {
                  setPwd2(e.target.value);
                }}
              />
            </Grid>
          </SignupForm>
        </SignupBox>
        <ButtonBox>
          <Button
            is_signup
            bgColor="#fff"
            color="#ff4b3a"
            text="회원가입"
            _onClick={signup}
          ></Button>
          <Button
            is_signupTwo
            bgColor="#FFA198"
            color="#fff"
            margin="1.2rem 0 0 0"
            text="뒤로가기"
            _onClick={() => {
              history.goBack();
            }}
          ></Button>
        </ButtonBox>
      </SigupBG>
    </React.Fragment>
  );
};

const fadein = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const SigupBG = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ff4b3a;
  background-image: url(${signBG});
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
`;

const SignupBox = styled.div`
  width: 100%;
  height: 70%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  animation: ${fadein} 1s;
`;

const SignupTitle = styled.h1`
  font-size: 36px;
  font-weight: bold;
  color: #fff;
  margin: 2rem 0 4rem 0;
`;

const SignupForm = styled.div`
  width: 70%;
  height: auto;
  margin-bottom: 3rem;
`;

const ButtonBox = styled.div`
  width: 100%;
  height: 30%;
  position: relative;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  animation: ${fadein} 1s;
`;

Signup.defaultProps = {};

export default Signup;
