//리덕스 툴킷


import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";


const cardAxios = () => {
    axios({
        method: "get",
        url:"http://1.224.63.113:8080/api/posts"
    
    })
    .then(response => {
        console.log(response)
    })
    .catch(error => {
        console.log(error);
    });
      
}

const cardSlice = createSlice({
    name:"card",
    initialState:[
        {
        title: "멘탈을 바꿔야 인생이 바뀐다", 
        star:'⭐⭐⭐⭐', 
        img : "http://image.kyobobook.co.kr/images/book/large/761/l9791191043761.jpg" 
    },
    {
        title: "돈의 속성(200쇄 리커버에디션)", 
        star:'⭐⭐⭐', 
        img : "http://image.kyobobook.co.kr/images/book/large/796/l9791188331796.jpg" 
    },
    {
        title: "벌거벗은 세계사: 사건편", 
        star:'⭐⭐⭐⭐', 
        comment: "세계사",
        img : "http://image.kyobobook.co.kr/images/book/large/887/l9791159095887.jpg" 
    },
    {
        title: "우리는 조구만 존재야", 
        star:'⭐⭐⭐', 
        comment: "먼지 먼지 그치그치 우리는 먼지같이 조구만 존재인걸?",
        img : "http://image.kyobobook.co.kr/images/book/large/497/l9791165213497.jpg" 
    },
    {
        title: ")아몬드(100만 부 기념 특별판", 
        star:'⭐⭐⭐', 
        comment: "아몬드 아몬드 아몬드",
        img : "http://image.kyobobook.co.kr/images/book/large/753/l9788936438753.jpg" 
    },
    ],
    reducers:{
        changeTitle: (state, action) =>{
            state.name = action.payload;
        }
    }
})

export const {changeTitle} = cardSlice.actions;
export default cardSlice.reducer;
export {cardAxios};