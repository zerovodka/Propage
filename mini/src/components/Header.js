import "../App.css";
import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const token = localStorage.getItem("token");

  return (
    <>
      {!token ? (
        <div className="App">
          <Head>
            <Logo>Propage$</Logo>
            <BtnWrap>
              <Btn>로그인</Btn>
            </BtnWrap>
          </Head>
        </div>
      ) : (
        <div className="App">
          <Head>
            <Logo>Propage$</Logo>
            <BtnWrap>
              <BtnPost>
                <FontAwesomeIcon icon={faPen} className="fa-lg" />
                게시글 작성
              </BtnPost>
              <Btn>로그아웃</Btn>
            </BtnWrap>
          </Head>
        </div>
      )}
    </>
  );
}

const Head = styled.div`
  width: 100%;
  height: 55px;
  background: #fff;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 6px 0px;
`;

const Logo = styled.div`
  margin-left: 30px;
  font-size: 24px;
  font-family: "Roboto Mono", monospace;
  font-weight: 600;
`;
const BtnWrap = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 30px;
`;
const Btn = styled.div`
  margin-left: 20px;
  font-size: 14px;
  font-weight: 400;
  border-bottom: 3px solid transparent;
  cursor: pointer;
  :hover {
    color: #64e7b1;
    transition: 0.5s ease;
  }
`;
const BtnPost = styled.div`
  width: 120px;
  height: 55px;
  background-color: #64e7b1;
  margin-left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #161616;
  font-size: 14px;
  font-weight: 600;
  border-bottom: 3px solid transparent;
  cursor: pointer;
  :hover {
    background: #161616;
    color: #64e7b1;
    transition: 0.5s ease;
  }
`;
export default Header;
