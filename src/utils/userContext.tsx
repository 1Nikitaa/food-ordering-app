import {createContext} from 'react'

 export let defaultUserContext = {
    isLoggedIn:false,
    userName:'Guest',
    login:()=>{},
    logout:()=>{},
 }


 const userContext = createContext(defaultUserContext)
 export default userContext;