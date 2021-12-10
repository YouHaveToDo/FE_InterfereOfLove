import React from "react";
import styled, { keyframes } from "styled-components";
import bgImage from "../images/hollo_background.png";
import LoveLogo from "../images/love_logo.png";
import { history } from "../redux/configureStore";
import { Button } from "../elements/index_02";

const Hello = (props) => {
  return (
    <React.Fragment>
      <HelloBox>
        <HelloItems>
          <Logo />
          <SubTitle>알지? 남의 연애가 개꿀잼 😆</SubTitle>
          <MainTitle>연애의 참견</MainTitle>
        </HelloItems>
        <Button
          is_hello
          bgColor="#fff"
          color="#ff4b3a"
          text="시작하기"
          _onClick={() => {
            history.push("/login");
          }}
        ></Button>
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
  background-color: #ff4b3a;
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
  top: 5rem;
`;

const Logo = styled.div`
  width: 100px;
  height: 90px;
  margin-bottom: 5px;
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
  margin-bottom: 15px;
  padding-left: 5px;
`;

const MainTitle = styled.h1`
  color: #fff;
  font-size: 55px;
`;

export default Hello;
