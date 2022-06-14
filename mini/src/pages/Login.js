import "../App.css";
import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import axios from "axios";

function Login() {
  const username = React.useRef();
  const password = React.useRef();

  function LoginPost() {
    axios({
      method: "post",
      url: "http://1.224.63.113:8080/user/login",
      data: {
        username: username.current.value,
        password: password.current.value,
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <Header />
      <Container>
        <Msg>
          <p>
            <span>Propage$</span> 에서
          </p>
          <p>나만의 베스트셀러를 모아보세요 📖</p>
        </Msg>
        <input ref={username} placeholder="아이디" type="text"></input>
        <input ref={password} placeholder="비밀번호" type="password"></input>
        <BtnLogin onClick={LoginPost}>로그인</BtnLogin>
        <Link to="/signup">
          <BtnJoin>가입하기</BtnJoin>
        </Link>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 500px;
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  input {
    width: 200px;
    padding: 13px;
    margin-top: 10px;
    border: 1px solid #eee;
    border-radius: 4px;
  }
`;
const Msg = styled.div`
  margin-bottom: 50px;
  p {
    font-size: 25px;
    margin-bottom: 10px;
  }
  span {
    font-family: "Roboto Mono", monospace;
    font-weight: bold;
    color: #64e7b1;
  }
`;
const BtnLogin = styled.div`
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
  margin-top: 50px;
  cursor: pointer;
  :hover {
    background: #161616;
    color: #64e7b1;
    transition: 0.5s ease;
  }
`;
const BtnJoin = styled.div`
  width: 150px;
  height: 40px;
  background: #64e7b1;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  color: #161616;
  margin-top: 10px;
  cursor: pointer;
  :hover {
    background: #161616;
    color: #64e7b1;
    transition: 0.5s ease;
  }
`;
export default Login;
