import { createStore, combineReducers } from "redux";
import card from './modules/card';

const rootReducer = combineReducers({card});

const store = createStore(rootReducer);

export default store;