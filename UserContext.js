import {createContext} from "react"

const UserContext = createContext({
    loggedInUser : "Default User" ,
    user:'',
    setUserName: ()=>{}
})

export default UserContext;