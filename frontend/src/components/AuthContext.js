import {createContext, useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

const AuthContext=createContext()

export default AuthContext

export const AuthProvider= ({children}) => {

    const navigate=useNavigate()
    let [user, setUser] =useState(null)
    let [authTokens, setAuthTokens] =useState(null)

    function parseJwt (token) {
        try {
          return JSON.parse(atob(token.split('.')[1]));
        } catch (e) {
          return null;
        }
      };

    let loginUser= async (e) => {
        e.preventDefault()
        console.log("Details posted")
        let response =await fetch('http://127.0.0.1:8000/api/token/', {
            method:'POST', 
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({'username': e.target.username.value, 'password': e.target.password.value})
        })
        let data=await response.json()
        if (response.ok){
            setAuthTokens(data)
            setUser(parseJwt(data.access))
            
        }else{
            alert('Something went wrong!')
        }
    }

    useEffect(() => {
        navigate('/login/post')

    }, [authTokens, user]);

    let ContextData={
        user,
        authTokens,
        loginUser
    }
    return(
        <AuthContext.Provider value={ContextData}>
            {children}
        </AuthContext.Provider>
    )
}
