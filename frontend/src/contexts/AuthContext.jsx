import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext(null)

export const AuthContextProvider = ({ children}) => {
    const [user, setUser] = useState({
        username: localStorage.getItem("username"),
        email: localStorage.getItem("email"),
        token: localStorage.getItem("token")
    })

    // profile 
    const [profile, setProfile] =  useState(null)

    let { token } = user
    const fetchProfile = async() => {
        const { data } = await axios.get("http://localhost:4000/api/auth/profile", {
        headers: {
            Authorization: `Bearer ${token}`
        }
        })

        setProfile(data)
    }
    console.log(profile,"This is profile")

  useEffect( () => {
    token && fetchProfile()
  }, [token])

    return(
        <AuthContext.Provider value={{ user, setUser, profile}}>
            { children }
        </AuthContext.Provider>
    )
}

// custom hook
export const useAuth = () => useContext(AuthContext)