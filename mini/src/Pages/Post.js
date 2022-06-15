import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router";

import Header from "../components/Header";

function Detail() {
  const navigate = useNavigate();
  const [selected, setSelected] = React.useState(1);
  const [isbn, setIsbn] = React.useState();
  const [data, setData] = React.useState();

  const [title, setTitle] = React.useState();
  const [author, setAuthor] = React.useState();
  const [publisher, setPublisher] = React.useState();
  const [description, setDescription] = React.useState();
  const [image, setImage] = React.useState();

  const comment = React.useRef();
  const searchBar = React.useRef();

  const handleSelect = (e) => {
    console.log(e.target.value);
    setSelected(e.target.value);
  };

  const Options = [
    // { key: "none", value: "별점을 선택해주세요" },
    { key: 1, value: "⭐" },
    { key: 2, value: "⭐⭐" },
    { key: 3, value: "⭐⭐⭐" },
    { key: 4, value: "⭐⭐⭐⭐" },
    { key: 5, value: "⭐⭐⭐⭐⭐" },
  ];
  // 검색 시 정보 1차로 가져오기
  function postGet() {
    axios({
      method: "get",
      url: "http://1.224.63.113:8080/api/book",
      //query값 넘기려면 data 아니고 params로 넘겨야한다.
      params: {
        query: searchBar.current.value,
      },
      headers: {
        // "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => {
        console.log(res);
        setIsbn(
          res.data.map((isbn, index) => {
            return res.data[index].isbn;
          })
        );
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  // console.log(isbn);
  console.log(data);
  console.log(isbn);
  // isbn 값 보내서 책 특정하기
  function bookInfo(index) {
    axios({
      method: "post",
      url: "http://1.224.63.113:8080/api/bookinfo",
      data: {
        isbn: isbn[index],
      },
      headers: {
        // "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => {
        console.log(res);
        setTitle(res.data.title.replaceAll("<b>", "").replaceAll("</b>", ""));
        setAuthor(res.data.author);
        setDescription(
          res.data.description.replaceAll("<b>", "").replaceAll("</b>", "")
        );
        setImage(res.data.image);
        setPublisher(res.data.publisher);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  console.log(title);
  console.log(author);
  console.log(description);
  console.log(image);
  console.log(publisher);

  // 게시글 작성
  function postPost() {
    axios({
      method: "post",
      url: "http://1.224.63.113:8080/api/post",
      data: {
        // isbn: "",
        // title: "",
        star: selected,
        comment: comment.current.value,
      },
      headers: {
        // "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
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
    <div>
      <Header />
      <PostWrap>
        <div
          className="detail_thumbnail"
          style={{ display: "flex", justifyContent: "center", margin: "auto" }}
        >
          {/* 웹서버 주소 지정 */}
          <img
            src={image}
            alt=""
            style={{ maxWidth: "80%", height: "60%" }}
          ></img>
        </div>
        <PostContents>
          <div>
            <input type="text" placeholder="책 검색" ref={searchBar} />
            <Btn onClick={postGet}>검색</Btn>
          </div>

          <div className="mini-card">
            <CardBox>
              {data &&
                data.map((data, index) => {
                  return (
                    <Card key={index}>
                      <Img
                        src={data.image}
                        onClick={() => {
                          bookInfo(index);
                        }}
                      />
                    </Card>
                  );
                })}
            </CardBox>
          </div>

          <h1>{title}</h1>
          <h2>{publisher}</h2>
          <h2>{author}</h2>

          <span>{description}</span>

          <div
            className="detail_comments"
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            <p>
              <br />
              <select
                onChange={handleSelect}
                value={selected}
                style={{
                  border: "none",
                  width: "40%",
                  fontSize: "30px",
                }}
              >
                {Options.map((item, index) => (
                  <option key={item.key} value={item.key}>
                    {item.value}
                  </option>
                ))}
              </select>
            </p>
            <h3>
              <input
                style={{
                  width: "100%",
                  height: "100px",
                  fontSize: "16px",
                  resize: "both",
                  padding: "10px",
                  boxSizing: "border-box",
                  border: "2px solid #1E90FF",
                  borderRadius: "10px",
                }}
                ref={comment}
                type="text"
                placeholder="한줄평을 남겨주세요."
              />
            </h3>
          </div>
          <Btn onClick={postPost}>작성 완료</Btn>
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

const CardBox = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  min-width: 800px;
  max-width: 1600px;
`;
const Card = styled.div`
  max-width: 350px;
  /* height: 500px; */
  background-color: #64e7b1;
  margin: 20px 25px;
  border-radius: 10px;
`;
const Img = styled.img`
  width: 70px;
  height: 250px;
  margin: 10px;
  background-color: white;
  border-radius: 10px;
`;

export default Detail;
