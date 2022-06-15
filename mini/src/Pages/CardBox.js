import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {useSelector, useDispatch} from "react-redux";
import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";




//백엔드 분들이랑 해보기
const CardList = (props) => {

    const [post,setPost] = useState([]);



    useEffect(()=>{
        
        axios({
        method: "get",
        url:"http://1.224.63.113:8080/api/posts"
    
    })
    .then(response => {
        console.log(response)
        console.log(response.data[0].image)
        setPost([...response.data]);
    })
    .catch(error => {
        console.log(error);
    });
        
    },[])
    
    

    const card = useSelector(state => state.card);

    console.log(card[0].title);

    const dispatch = useDispatch();
    
    const cardAxios = () => {
    

    
    
      
}

//img 이미지
//title 책 제목
//star 별

    return(
        <>
        
        <CardBox>
            {post.map((list,index) => {
                return (
                <Card key={post.id}>
                    <Img src={post[index].image} />
                    <Title>
                        
                        {post[index].title} 
                    </Title>
                    <Star>
                        {post[index].star}
                    </Star>
                </Card>
                )  
            })}    
        </CardBox>
        
        </>
    )
}


const CardBox = styled.div`
    
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    min-width: 800px;
    max-width: 1600px;
`

const Card = styled.div`
    max-width: 350px;
    /* height: 500px; */
    background-color: #64e7b1;
    margin: 20px 25px;
    border-radius: 10px;

   
`

const Img = styled.img`
    width: 330px;
    height: 250px;
    margin: 10px;
    background-color: white;
    border-radius: 10px;

`

const Title = styled.div`
    width: 330px;
    /* height: 50px; */
    background-color: white;
    margin: 10px;
    border-radius: 10px;
`

const Star = styled.div`
    width: 330px;
    /* height: 50px; */
    background-color: white;
    margin: 10px;
    border-radius: 10px;
`

export default CardList;