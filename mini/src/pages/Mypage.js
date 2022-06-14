import "../App.css";
import React from "react";
import styled from "styled-components";
import CenterHeader from "../components/CenterHeader";

function Mypage() {
  return (
    <>
      <CenterHeader />
      <Container>
        <p>닉네임 님의 마이페이지</p>
        <Btn>회원 정보 수정</Btn>
      </Container>
    </>
  );
}
const Container = styled.div`
  width: 100vw;
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  p {
    font-size: 25px;
  }
`;
const Btn = styled.div`
  width: 150px;
  height: 40px;
  background: #64e7b1;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: bold;
  color: #161616;
  margin-top: 30px;
  cursor: pointer;
  :hover {
    background: #161616;
    color: #64e7b1;
    transition: 0.5s ease;
  }
`;
export default Mypage;
