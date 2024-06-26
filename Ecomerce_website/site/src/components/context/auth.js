import { useState,useContext,createContext, useEffect } from "react";
import axios from "axios";

const AuthContext=createContext()
const AuthProvider=({children})=>{
    const [auth,setauth]=useState(
        {
          user:null,
          token:""  ,
        }
    )
    axios.defaults.headers.common["Authorization"]=auth?.token
    useEffect(()=>{
        const data =localStorage.getItem("auth")
        if(data){
            const parseData=JSON.parse(data)
            setauth({
                ...auth,
                user:parseData.user,
                token:parseData.token,

            })
        }
        //eslink-disable-next-line
    },[])
return(
    <AuthContext.Provider value={[auth,setauth]}>
        {children}
    </AuthContext.Provider>

)
}

// custom hook
const  useAuth=()=>useContext(AuthContext)
export {useAuth,AuthProvider}