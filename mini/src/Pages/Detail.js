import React, { useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

function Detail() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  let params = useParams();
  // console.log(params);
  const [title, setTitle] = React.useState();
  const [author, setAuthor] = React.useState();
  const [publisher, setPublisher] = React.useState();
  const [description, setDescription] = React.useState();
  const [image, setImage] = React.useState();
  const [star, setStar] = React.useState();
  const [comment, setComment] = React.useState();

  const [username, setUsername] = React.useState();

  useEffect(() => {
    axios({
      method: "get",
      url: `http://1.224.63.113:8080/api/post/${params.id}`,
      headers: {
        // "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => {
        console.log(res);
        setTitle(res.data.title);
        setAuthor(res.data.author);
        setPublisher(res.data.publisher);
        setDescription(res.data.description);
        setImage(res.data.image);
        setStar(res.data.star);
        setComment(res.data.comment);
        setUsername(res.data.user.username);
      })
      .catch((err) => {
        console.log(err);
        alert("로그인 부탁드려요!");
        navigate("/login");
      });
  }, []);
  console.log(username);
  function postDelete() {
    axios({
      method: "delete",
      url: `http://1.224.63.113:8080/api/post/${params.id}`,
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => {
        console.log(res);
        alert("삭제되었습니다!");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  console.log(localStorage.getItem("username"));

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
                src={image}
                alt=""
                style={{ maxWidth: "80%", height: "60%" }}
              ></img>
            </div>
            <DetailContents>
              <Title>{title}</Title>
              <Text>{publisher}</Text>
              <Text>{author}</Text>

              <Desc>{description}</Desc>

              <div
                className="detail_comments"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                }}
              >
                <Star>{"⭐".repeat(star)}</Star>
                <Text>{comment}</Text>
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
                objectFit: "contain",
              }}
            >
              {/* 웹서버 주소 지정 */}
              <img
                src={image}
                alt=""
                style={{ width: "250px", height: "60%", objectFit: "contain" }}
              ></img>
            </div>
            <DetailContents>
              {username === localStorage.getItem("username") ? (
                <>
                  <Btn onClick={postDelete}>삭제</Btn>
                  <Title>{title}</Title>
                  <Text>{publisher}</Text>
                  <Text>{author}</Text>

                  <Desc>{description}</Desc>

                  <div
                    className="detail_comments"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      textAlign: "center",
                    }}
                  >
                    <Star>{"⭐".repeat(star)}</Star>

                    <Text>{comment}</Text>
                  </div>
                </>
              ) : (
                <>
                  <Title>{title}</Title>
                  <Text>{publisher}</Text>
                  <Text>{author}</Text>

                  <Desc>{description}</Desc>

                  <div
                    className="detail_comments"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      textAlign: "center",
                    }}
                  >
                    <Star>{"⭐".repeat(star)}</Star>

                    <Text>{comment}</Text>
                  </div>
                </>
              )}
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
