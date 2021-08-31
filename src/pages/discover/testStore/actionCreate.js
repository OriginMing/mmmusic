import * as actionType from './constant';
import {getTest} from '../../../service/test'

const change = (res)=>({
type:actionType.CHANGE_BANNERS,
toopbanners:res.banners
})

export const getTopto = ()=>{
    return dispatch => {
        getTest().then(res=>{
           dispatch(change(res))
        })
    } 
}