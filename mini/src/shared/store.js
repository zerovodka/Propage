import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";

import user from "./modules/user";

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  user: user,
});

const middlewares = [thunk.withExtraArgument({ history: history })];

const enhancer = applyMiddleware(...middlewares);

let store = (initialStore) => createStore(rootReducer, enhancer);

export default store();
