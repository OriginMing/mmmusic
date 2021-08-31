import { Redirect } from "react-router-dom";
import MyFriend from "../pages/myFriend/myFriend";
import Mine from "../pages/mine/mine";
import Discover from "../pages/discover/discover";
import Test from "../pages/discover/testStore/test";
const routes = [
    {
        path:'/',
        exact:true,
        render(){
            return (<Redirect to="/discover"></Redirect>)
        }
    },
    {
        path:'/discover',
       component:Discover,
       routes:[
           {
               path:'/discover',
               exact:true,
               render(){
                return (<Redirect to="/discover/test"></Redirect>)
            }
           },
           {
               path:'/discover/test',
               component:Test,
           }
       ]
    },
    {
        path:'/mine',
       component:Mine
    },
    {
        path:'/myfirend',
        component:MyFriend
    }
]
export default routes;