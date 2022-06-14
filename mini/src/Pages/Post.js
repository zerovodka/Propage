import React from "react";
import styled from "styled-components";

//주석
function Detail() {
  return (
    <div>
      <PostWrap>
        <div
          className="detail_thumbnail"
          style={{ display: "flex", justifyContent: "center", margin: "auto" }}
        >
          {/* 웹서버 주소 지정 */}
          <img
            src="http://image.yes24.com/goods/102347474/XL"
            alt=""
            style={{ maxWidth: "80%", height: "60%" }}
          ></img>
        </div>
        <PostContents>
          <h1>TITLE</h1>
          <h2>출판사</h2>
          <h2>저자</h2>

          <span>
            가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하
          </span>

          <div
            className="detail_comments"
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            <h2>
              <lable for="star-select">별점 주기!!</lable>
              <br />
              <select
                name="star"
                id="star-select"
                style={{
                  border: "none",
                  width: "40%",
                  fontSize: "30px",
                }}
              >
                <option value="1">⭐</option>
                <option value="2">⭐⭐</option>
                <option value="3">⭐⭐⭐</option>
                <option value="4">⭐⭐⭐⭐</option>
                <option value="5">⭐⭐⭐⭐⭐</option>
              </select>
            </h2>
            <h3>
              <textarea
                style={{
                  width: "100%",
                  height: "200px",
                  fontSize: "16px",
                  resize: "both",
                  padding: "10px",
                  boxSizing: "border-box",
                  border: "2px solid #1E90FF",
                  borderRadius: "10px",
                }}
              />
            </h3>
          </div>
        </PostContents>
      </PostWrap>
    </div>
  );
}
const PostWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 40px;
  @media screen and (max-width: 850px) {
    flex-direction: column;
    align-items: center;
  }
`;

const PostContents = styled.div`
  max-width: 50%;
  height: auto;
  @media screen and (max-width: 850px) {
    max-width: 90%;
  }
`;

export default Detail;
