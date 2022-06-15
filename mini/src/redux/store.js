//리덕스 기본

// import { createStore, combineReducers } from "redux";
// import card from './modules/card';

// const rootReducer = combineReducers({card});

// const store = createStore(rootReducer);

// export default store;

//리덕스 툴킷

import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./modules/cardSlice";

const store = configureStore({
  reducer: {
    card: cardReducer,
  },
});

export default store;
