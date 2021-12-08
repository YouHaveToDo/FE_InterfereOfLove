import React from "react";
import styled, { keyframes } from "styled-components";
import bgImage from "../images/hollo_background.png";
import LoveLogo from "../images/love_logo.png";
import { history } from "../redux/configureStore";

const Hello = (props) => {
  return (
    <React.Fragment>
      <HelloBox>
        <HelloItems>
          <Logo />
          <SubTitle>역시 남의 연애가 개꿀잼 😆</SubTitle>
          <MainTitle>연애의 참견</MainTitle>
        </HelloItems>
        <ButtonStart
          onClick={() => {
            history.push("/login");
          }}
        >
          <p>시작하기</p>
        </ButtonStart>
      </HelloBox>
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

const HelloBox = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  top: 0;
  left: 0;
  background-color: #FF4B3A;
  background-image: url(${bgImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  animation: ${fadein} 0.95s;
`;

const HelloItems = styled.div`
  width: 100%;
  height: auto;
  position: absolute;
  left: 8%;
  top: 8%;
`;

const Logo = styled.div`
  width: 100px;
  height: 90px;
  margin-bottom: 8px;
  background-image: url(${LoveLogo});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  animation: ${jump} infinite 1.25s;
  animation-delay: 0.8s;
`;

const SubTitle = styled.p`
  color: #fff;
  font-size: 18px;
  margin-bottom: 25px;
  padding-left: 5px;
`;

const MainTitle = styled.h1`
  color: #fff;
  font-size: 55px;
`;

const ButtonStart = styled.div`
  width: 314px;
  height: 70px;
  border-radius: 30px;
  border: none;
  background-color: #fff;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 7vh;
  color: #FF4B3A;
  text-align: center;
  line-height: 70px;

  &:hover {
    background-color: #ffa198;
    transition: 0.55s;
  }

  &:not(:hover) {
    background-color: #ffffff;
    transition: 0.55s;
  }

  &:hover > p {
    color: #ffffff;
    transition: 0.35s;
  }
`;

export default Hello;
