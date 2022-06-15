const CHANGE_TITLE = "title/CHANGE_TITLE";

const initial_state = {title: "아무것도 없는 책", star:'⭐⭐⭐', comment: "진짜 아무것도 없는거여?"};

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