import React, { memo ,useEffect} from 'react'
import { connect ,useDispatch,useSelector,shallowEqual} from 'react-redux'
import {getTopto} from './actionCreate'


function Test(props) {
  const testData = useSelector(state=>({
    //toopbanners  :  state.get('test').get('toopbanners')
    toopbanners  :  state.getIn(['test','toopbanners']) 
  }),shallowEqual)
  const dispatch =  useDispatch()
    useEffect(() => {
        dispatch(getTopto())
    }, [dispatch])
    return (
        <div>
           {testData.toopbanners.length}
        </div>
    )
}


export default (memo(Test))
/* function Test(props) {
    const {getTopto2,toopbanners}  = props
      useEffect(() => {
          getTopto2();
      }, [getTopto2])
      return (
          <div>
              {toopbanners.length}
          </div>
      )
  }
  const mapstatetoprops = state=>({
      toopbanners:state.test.toopbanners
  })
  const mapdispatchtoprops = dispatch=>({
      getTopto2:()=>{
          dispatch(getTopto())
      } 
  })
  
  export default connect(mapstatetoprops,mapdispatchtoprops)(memo(Test)) */