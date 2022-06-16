import React from "react";
import styled from "styled-components";
import Header from "../components/Header";

function Detail() {
  const token = localStorage.getItem("token");
  //로컬 스토리지 토큰 값 === 게시글 작성자 토큰 삭제 버튼 활성화
  // function postDelete() {
  //   axios({
  //     method: "delete",
  //     url: `http://1.224.63.113:8080/api/post/${postId}`,
  //   }),

  // }
  return (
    <>
      {!token ? (
        <div>
          <Header />
          <DetailWrap>
            <div
              className="detail_thumbnail"
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "auto",
              }}
            >
              {/* 웹서버 주소 지정 */}
              <img
                src="http://image.yes24.com/goods/102347474/XL"
                alt=""
                style={{ maxWidth: "80%", height: "60%" }}
              ></img>
            </div>
            <DetailContents>
              <Title>TITLE</Title>
              <Text>출판사</Text>
              <Text>저자</Text>

              <Desc>
                가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하
              </Desc>

              <div
                className="detail_comments"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                }}
              >
                <Star>⭐⭐⭐⭐⭐</Star>
                <Text>가나다라마바사아자차카타파하</Text>
              </div>
            </DetailContents>
          </DetailWrap>
        </div>
      ) : (
        <div>
          <Header />
          <DetailWrap>
            <div
              className="detail_thumbnail"
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "auto",
              }}
            >
              {/* 웹서버 주소 지정 */}
              <img
                src="http://image.yes24.com/goods/102347474/XL"
                alt=""
                style={{ maxWidth: "80%", height: "60%" }}
              ></img>
            </div>
            <DetailContents>
              {/* <Btn onClick={postDelete}>삭제</Btn> */}
              <Title>TITLE</Title>
              <Text>출판사</Text>
              <Text>저자</Text>

              <Desc>
                가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하
              </Desc>

              <div
                className="detail_comments"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                }}
              >
                <Star>⭐⭐⭐⭐⭐</Star>

                <Text>가나다라마바사아자차카타파하</Text>
              </div>
            </DetailContents>
          </DetailWrap>
        </div>
      )}
    </>
  );
}
const DetailWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 40px;
  @media screen and (max-width: 850px) {
    flex-direction: column;
    align-items: center;
  }
`;

const DetailContents = styled.div`
  max-width: 50%;
  height: auto;
  @media screen and (max-width: 850px) {
    max-width: 90%;
  }
`;
const Title = styled.div`
  width: 500px;
  font-size: 25px;
  font-weight: 600;
  padding-top: 50px;
  line-height: 140%;
`;
const Text = styled.div`
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #555;
  font-size: 16px;
  padding-top: 20px;
`;
const Star = styled.div`
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #555;
  font-size: 25px;
  padding-top: 20px;
`;
const Desc = styled.div`
  width: 500px;
  font-size: 16px;
  color: #555;
  padding-top: 20px;
  line-height: 140%;
  text-align: justify;
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

export default Detail;
