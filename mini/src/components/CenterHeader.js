import "../App.css";
import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function CenterHeader() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <Head>
        <LogoCenter
          onClick={() => {
            navigate("/");
          }}
        >
          Propage$
        </LogoCenter>
      </Head>
    </div>
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
const LogoCenter = styled.div`
  margin: 0 auto;
  font-size: 24px;
  font-family: "Roboto Mono", monospace;
  font-weight: 600;
  :hover {
    cursor: pointer;
  }
`;

export default CenterHeader;
