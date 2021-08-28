import MyFriend from "../pages/myFriend/myFriend";
import Mine from "../pages/mine/mine";
import Discover from "../pages/discover/discover";
const routes = [
    {
        path:'/',
        exact:true,
       component:Discover
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