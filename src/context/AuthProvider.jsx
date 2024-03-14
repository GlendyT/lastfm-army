import { useState, useEffect, createContext, Children } from "react";
import { useNavigate } from "react-router-dom";
import lastfmAxios from "../config/lastfmAxios";


const AuthContext = createContext();

const AuthProvider = ({children}) => { 

    const [ hola, setHola] = useState("Hola Mundo")

    /*
const [ auth, setAuth] = useState({})
const [ cargando, setCargando] = useState({})

const navigate = useNavigate()


useEffect(() => {
    const autenticarUsuario = async  () => {
        const token =  localStorage.getItem('token')
        if(!token){
            setCargando(false)
            return
        }
        const config = {
            headers: {
                "Content-Type" : "application/json",
                Authorization : "Bearer ${token}"
            }
        }
        try {
            const { data } = await lastfmAxios("auth.getSession", {}, config )
            setAuth( data);
            navigate("/lastFmUserData")
        } catch (error) {
            setAuth({})
        }
        setCargando(true)
    }
    autenticarUsuario()
},[])*/

return (
    <AuthContext.Provider 
    value={{ 
        hola, 
        setHola
        }}
        >
        {children}
    </AuthContext.Provider>
 )
}

export {
    AuthProvider
}

export default AuthContext;