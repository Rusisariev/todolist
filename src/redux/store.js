import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import todoReducer from "./reducers/todoReducer";

const reducer = combineReducers({
    todolist: todoReducer
})

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

let store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

export default store