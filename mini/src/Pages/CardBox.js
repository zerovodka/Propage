import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CardList = (props) => {
  const [post, setPost] = useState([]);
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [id, setId] = useState();

  useEffect(() => {
    axios({
      method: "get",
      url: "http://1.224.63.113:8080/api/posts",
    })
      .then((response) => {
        console.log(response);
        // console.log(response.data[0].image);
        setPost([...response.data]);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function postGet(index) {
    axios({
      method: "get",
      url: `http://1.224.63.113:8080/api/post/${index + 14}`,

      headers: {
        // "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <CardBox>
        {post.map((list, index) => {
          return (
            <Card
              key={post.id}
              onClick={() => {
                postGet(index);
                navigate(`/detail/${data[index].postId}`);
              }}
            >
              <Img src={post[index].image} />
              <Title>{post[index].title}</Title>
              <Star>{"⭐".repeat(post[index].star)}</Star>
            </Card>
          );
        })}
      </CardBox>
    </>
  );
};
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
  /* background-color: #64E7B1; */
  margin: 20px 25px;
  border-radius: 10px;
`;
const Img = styled.img`
  width: 300px;
  // height: 250px;
  margin: 10px;
  background-color: white;
  border-radius: 10px;
  object-fit: contain;
`;
const Title = styled.div`
  width: 330px;
  /* height: 50px; */
  background-color: white;
  margin: 10px;
  border-radius: 10px;
`;
const Star = styled.div`
  width: 330px;
  /* height: 50px; */
  background-color: white;
  margin: 10px;
  border-radius: 10px;
`;
export default CardList;
