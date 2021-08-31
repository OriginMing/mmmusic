//import { combineReducers } from "redux";
import { combineReducers } from "redux-immutable";
import {reducer as testReducer } from '../pages/discover/testStore/index'
const cReducer =  combineReducers({
    test:testReducer
})
export default cReducer