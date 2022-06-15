//리덕스 기본
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

const CHANGE_TITLE = "title/CHANGE_TITLE";

const initial_state = {
    title: "멘탈을 바꿔야 인생이 바뀐다", 
    star:'⭐⭐⭐', 
    comment: "정신 차려 제발",
    img : "http://image.kyobobook.co.kr/images/book/large/761/l9791191043761.jpg" 
};

export const changeTitle = (title) => {
    return {type:CHANGE_TITLE, title};
}

export default function reducer(state = initial_state, action = {}){
    switch(action.type){
        case "title/CHANGE_TITLE":{
            return {...state, title: action.name}
        }

        default :
        return state;
    }
}


export {cardAxios};