import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import rootReducer from './redux/reducers'
import { composeWithDevTools } from "@redux-devtools/extension";

const initialStage ={};

const middleware =[thunk];

const store = createStore(
    rootReducer,
    initialStage,
    // applymiddleware(...middleware)
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;