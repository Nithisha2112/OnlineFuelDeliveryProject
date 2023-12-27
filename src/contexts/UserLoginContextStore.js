import {useState} from 'react'
import axios from 'axios'
import { loginContext } from './loginContext';

function UserLoginStore({children}){
    let  [user,setUser]=useState({});
    const [loginErr,setLoginErr]=useState("");
    let  [userLoginStatus,setUserloginStatus]=useState(false)
    //function to make user login request
    const loginUser=(userCredentialsObj)=>{

        axios
        .post("http://localhost:3500/user-api/login",userCredentialsObj)
        .then(response=>{
           console.log(response);
            if(response.data.message==="success"){
                localStorage.setItem("token",response.data.Token)
                setUser({... response.data.user});
                setLoginErr("");
                setUserloginStatus(true)
                console.log(user)
                }else{
                  setLoginErr(response.data.message)
                }
            })
            
        
        .catch(err=>{
            console.log("err in user login",err);
            setLoginErr(err.message);
            
        })
    }
    const logoutUser=()=>{
        localStorage.clear();
        setUserloginStatus(false)
    }
    return(
        <loginContext.Provider login value={[user,loginErr,userLoginStatus,loginUser,logoutUser]}>
            {children}
            </loginContext.Provider>

    )

}
export default UserLoginStore;