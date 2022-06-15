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
          <Msg>원하는 책을 검색해보세요 📖</Msg>
          <InputWrap>
            <PostInput type="text" placeholder="책 검색" ref={searchBar} />
            <Btn onClick={postGet}>검색</Btn>
          </InputWrap>

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
          <TextBox>
            <Title>{title}</Title>

            <Auth>{publisher}</Auth>
            <Auth>{author}</Auth>

            <Desc>{description}</Desc>
          </TextBox>

          <div
            className="detail_comments"
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            <StarWrap>
              <StarMsg>별점을 선택하고</StarMsg>
              <Star onChange={handleSelect} value={selected}>
                {Options.map((item, index) => (
                  <option key={item.key} value={item.key}>
                    {item.value}
                  </option>
                ))}
              </Star>
            </StarWrap>
            <StarMsg>한줄평을 남겨주세요</StarMsg>
            <textarea
              style={{
                width: "400px",
                height: "80px",
                fontSize: "16px",
                padding: "30px",
                margin: "0 auto",
                border: "1px solid #ddd",
                borderRadius: "4px",
                marginTop: "5px",
                resize: "none",
              }}
              ref={comment}
              type="text"
              placeholder="한줄평"
            />
          </div>
          <PostBtn onClick={postPost}>작성 완료</PostBtn>
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
  max-width: 55%;
  height: auto;
  @media screen and (max-width: 850px) {
    max-width: 90%;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const InputWrap = styled.div`
  display: flex;
  margin-top: 40px;
  display: flex;
  justify-content: center;
`;
const Msg = styled.div`
  font-size: 25px;
  margin-top: 30px;
`;
const PostInput = styled.input`
  width: 300px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;
const Btn = styled.div`
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

const CardBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 40px;
  width: 800px;
`;
const Card = styled.div`
  width: 130px;
  /* height: 500px; */
  border: 1px solid #eee;
  margin: 5px;
  border-radius: 10px;

  :hover {
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
    cursor: pointer;
  }
`;
const TextBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.div`
  width: 500px;
  font-size: 25px;
  font-weight: 600;
  padding-top: 50px;
  line-height: 140%;
`;
const Auth = styled.div`
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #555;
  font-size: 16px;
  padding-top: 20px;
  div {
    margin-left: 10px;
  }
`;
const Desc = styled.div`
  width: 500px;
  font-size: 16px;
  color: #555;
  padding-top: 20px;
  line-height: 140%;
  text-align: justify;
`;
const Img = styled.img`
  width: 100px;
  margin: 10px;
  background-color: white;
  border-radius: 10px;
`;
const StarWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const StarMsg = styled.div`
  font-size: 18px;
  padding: 10px;
  margin-top: 20px;
`;
const Star = styled.select`
  width: 200px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  appearance: none;
  font-size: 25px;
  letter-spacing: 5px;
  text-align: center;
`;
const PostBtn = styled.div`
  width: 150px;
  height: 40px;
  background: #64e7b1;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  color: #161616;
  margin-top: 30px;
  cursor: pointer;
  :hover {
    background: #161616;
    color: #64e7b1;
    transition: 0.5s ease;
  }
`;
export default Detail;
