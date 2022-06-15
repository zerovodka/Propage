import "../App.css";
import CenterHeader from "../components/CenterHeader";
import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const username = React.useRef();
  const nickname = React.useRef();
  const password = React.useRef();
  const passwordCheck = React.useRef();

  function register() {
    if (
      username.current.value === "" ||
      password.current.value === "" ||
      passwordCheck.current.value === "" ||
      nickname.current.value === ""
    ) {
      alert("모든 항목을 입력해주세요!");
      return;
    }
  }
  function pwdCheck() {
    if (password.current.value !== passwordCheck.current.value) {
      alert("비밀번호가 일치하지 않아요!");
      password.current.value = "";
      passwordCheck.current.value = "";
      return;
    }
    if (password.current.value.length < 4) {
      alert("비밀번호가 너무 짧아요!");
      password.current.value = "";
      passwordCheck.current.value = "";
      return;
    }
    alert("비밀번호가 일치합니다.");
  }
  function signupPost() {
    axios({
      method: "post",
      url: "http://1.224.63.113:8080/user/signup",
      data: {
        username: username.current.value,
        nickname: nickname.current.value,
        password: password.current.value,
        passwordCheck: passwordCheck.current.value,
      },
    })
      .then((res) => {
        console.log(res);
        if (res.data.result === true) {
          alert("회원 가입이 완료되었습니다!");
          navigate("/login");
        } else {
          alert(res.data.errorMessage);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function idCheck() {
    axios({
      method: "get",
      url: `http://1.224.63.113:8080/user/idCheck/${username.current.value}`,
    })
      .then((res) => {
        console.log(res);
        if (res.data) {
          alert("아이디 확인이 완료되었습니다.");
        } else {
          alert("같은 아이디가 이미 사용중입니다!");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function nickCheck() {
    axios({
      method: "get",
      url: `http://1.224.63.113:8080/user/nicknameCheck/${nickname.current.value}`,
    })
      .then((res) => {
        console.log(res);
        if (res.data) {
          alert("닉네임 확인이 완료되었습니다.");
        } else {
          alert("같은 닉네임이 이미 사용중입니다!");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <CenterHeader />
      <Container>
        <Msg>
          <p>안녕하세요😊</p>
          <p>
            <span>Propage$</span> 의 회원이 되어주세요.
          </p>
        </Msg>
        <InputWrap>
          <Wrap>
            <Input
              ref={username}
              placeholder="아이디를 입력해주세요."
              type="text"
            ></Input>
            <CheckBtn onClick={idCheck}>중복 확인</CheckBtn>
          </Wrap>
          <Wrap>
            <Input
              ref={nickname}
              placeholder="닉네임을 입력해주세요."
              type="text"
            ></Input>
            <CheckBtn onClick={nickCheck}>중복 확인</CheckBtn>
          </Wrap>
          <Wrap>
            <Input
              ref={password}
              placeholder="비밀번호를 입력해주세요.(4자리 이상)"
              type="password"
            ></Input>
          </Wrap>
          <Wrap>
            <Input
              ref={passwordCheck}
              placeholder="비밀번호를 한번 더 입력해주세요."
              type="password"
            ></Input>
            <CheckBtn onClick={pwdCheck}>확인</CheckBtn>
          </Wrap>
        </InputWrap>
        <Btn onClick={(register, signupPost)}>가입하기</Btn>
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
`;
const InputWrap = styled.div`
  width: 320px;
`;
const Input = styled.input`
  width: 200px;
  padding: 13px;
  border: 1px solid #eee;
  border-radius: 4px;
  font-size: 12px;
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
const Wrap = styled.div`
  display: flex;

  align-items: center;
  margin-top: 10px;
`;
const CheckBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  width: 80px;
  font-size: 12px;
  background: #eee;
  margin-left: 5px;
  padding: 15px;
  :hover {
    cursor: pointer;
    background: #ccc;
    transition: 0.5s ease;
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
  margin-top: 70px;
  cursor: pointer;
  :hover {
    background: #161616;
    color: #64e7b1;
    transition: 0.5s ease;
  }
`;

export default Signup;
