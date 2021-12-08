import React from "react";
import styled, { keyframes } from "styled-components";
import LoginPng from "../images/login_Image.png";
import LoveLogo from "../images/love_logo.png";
import { Grid, Text, Input } from "../elements/index_02";
import { history } from "../redux/configureStore";

const login = (props) => {
  return (
    <React.Fragment>
      <LoginBox>
        <LoginLoveImage />
        <LoginImage />
        <LoginTitle>연애의 참견</LoginTitle>
        <LoginForm>
          <Grid>
            <Text color="#cccccc">아이디</Text>
            <Input Pcolor="#555" placeholder="" _onChange={(e) => {}} />
          </Grid>
          <Grid margin="2vw 0 0 0">
            <Text color="#cccccc">비밀번호</Text>
            <Input Pcolor="#555" placeholder="" _onChange={(e) => {}} />
          </Grid>
        </LoginForm>
      </LoginBox>
      <ButtonBox>
        <ButtonLogin onClick={() => {}}>
          <p>로그인</p>
        </ButtonLogin>
        <ButtonSignup
          onClick={() => {
            history.push("/Signup");
          }}
        >
          <p>회원가입</p>
        </ButtonSignup>
      </ButtonBox>
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

const jump = keyframes`
  0% {
    transform: scale(1)
  }
  50% {
    transform: scale(0.7)
  }
  100% {
    transform: scale(1)
  }
  50% {
    transform: scale(0.7)
  }
  0% {
    transform: scale(1)
  }
`;

const LoginBox = styled.div`
  width: 100%;
  height: 70%;
  background-color: #fff;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const LoginImage = styled.div`
  margin-top: 3rem;
  width: 280px;
  height: 280px;
  background-color: #FF4B3A;
  background-image: url(${LoginPng});
  background-position: left top;
  background-size: 112%;
  border-radius: 100%;
  animation: ${fadein} 1s;
  box-shadow: 0px 5px 18px rgba(250, 74, 12, 0.5);
`;

const LoginLoveImage = styled.div`
  width: 8rem;
  height: 7.5rem;
  position: absolute;
  right: 50px;
  top: 7.5%;
  z-index: 9999;
  background-image: url(${LoveLogo});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  animation: ${jump} infinite 1.25s;
`;

const LoginTitle = styled.h1`
  font-size: 24px;
  margin: 2rem 0;
  z-index: 999;
`;

const LoginForm = styled.div`
  width: 70%;
  height: auto;
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

const ButtonLogin = styled.div`
  width: 314px;
  height: 70px;
  border-radius: 30px;
  border: none;
  background-color: #FF4B3A;
  color: #ffffff;
  text-align: center;
  line-height: 70px;
  box-shadow: 0px 5px 10px rgba(255, 75, 58, 0.3);

  &:hover {
    box-shadow: 0px 5px 10px rgba(255, 75, 58, 0.75);
    transition: 0.5s;
  }

  &:not(:hover) {
    box-shadow: 0px 3px 8px rgba(255, 75, 58, 0.3);
    transition: 0.5s;
  }
`;

const ButtonSignup = styled(ButtonLogin)`
  color: #fa4a0c;
  background-color: #fff;
  margin-top: 1.2rem;
`;

export default login;
