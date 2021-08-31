import * as actionType from './constant'
import {Map} from 'immutable'
const defaultState = Map({
    toopbanners:[]
}) 
//{...state ,toopbanners:action.toopbanners}
function reducer(state=defaultState,action){
   switch(action.type){
       case actionType.CHANGE_BANNERS:
            return state.set('toopbanners',action.toopbanners) 
      default:
          return state;      
   }
}

export default reducer