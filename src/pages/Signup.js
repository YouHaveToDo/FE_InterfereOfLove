import React from "react";
import styled, { keyframes } from "styled-components";
import { Grid, Text, Input } from "../elements";
import { history } from "../redux/configureStore";
import signBG from "../images/signup_bg.png";

const Signup = (props) => {
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
                placeholder=""
                _onChange={(e) => {}}
              />
            </Grid>
            <Grid margin="2vw 0 0 0">
              <Text size="12px" color="#fff">
                닉네임
              </Text>
              <Input
                Pfont="20px"
                TR="0.5s"
                BT="1px solid #ffffff"
                Pcolor="#fff"
                placeholder=""
                _onChange={(e) => {}}
              />
            </Grid>
            <Grid margin="2vw 0 0 0">
              <Text size="12px" color="#fff">
                비밀번호
              </Text>
              <Input
                Pfont="20px"
                TR="0.5s"
                BT="1px solid #ffffff"
                Pcolor="#fff"
                placeholder=""
                _onChange={(e) => {}}
              />
            </Grid>
            <Grid margin="2vw 0 0 0">
              <Text size="12px" color="#fff">
                비밀번호 확인
              </Text>
              <Input
                Pfont="20px"
                TR="0.5s"
                BT="1px solid #ffffff"
                Pcolor="#fff"
                placeholder=""
                _onChange={(e) => {}}
              />
            </Grid>
          </SignupForm>
        </SignupBox>
        <ButtonBox>
          <ButtonSignup onClick={() => {}}>
            <p>로그인</p>
          </ButtonSignup>
          <ButtonBack
            onClick={() => {
              history.push("/Login");
            }}
          >
            <p>뒤로가기</p>
          </ButtonBack>
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
  margin-top: 2.5rem;
  margin-bottom: 4rem;
`;

const SignupForm = styled.div`
  width: 70%;
  height: auto;
  margin-bottom: 5rem;
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

const ButtonSignup = styled.div`
  width: 314px;
  height: 70px;
  border-radius: 30px;
  border: none;
  background-color: #fff;
  color: #ff4b3a;
  text-align: center;
  line-height: 70px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: #ffa198;
    color: #fff;
    transition: 0.5s;
  }

  &:not(:hover) {
    transition: 0.5s;
  }
`;

const ButtonBack = styled(ButtonSignup)`
  color: #ffffff;
  background-color: #ffa198;
  margin-top: 1.2rem;

  &:hover {
    background-color: #cccccc;
    color: #fff;
    transition: 0.5s;
  }

  &:not(:hover) {
    transition: 0.5s;
  }
`;

export default Signup;
