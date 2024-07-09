/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react"
import { api } from "../service/api"

const AuthContext = createContext({})

function AuthProvider({ children }) {
    const [data, setData] = useState({})

    async function signIn({ email, password }) {
        try {
            console.log("cheguei até o contexto")
            const response = await api.post("/sessions", { email, password })
            const { user, token } = response.data

            localStorage.setItem("@foodexplorer:user", JSON.stringify(user))
            localStorage.setItem("@foodexplorer:token", token)

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`

            setData({ user, token })
        } catch (error) {
            if (error) {
                alert(error.response.data.message)
            } else {
                alert("Não foi possível acessar o sistema!")
            }
        }
    }

    function signOut() {
       localStorage.removeItem("@foodexplorer:token")
       localStorage.removeItem("@foodexplorer:user")

       setData({})
    }

    useEffect(() =>{
        const user = localStorage.getItem("@foodexplorer:user")
        const token = localStorage.getItem("@foodexplorer:token")

        if(user && token) {
            api.defaults.headers.common["Authorization"] = `Bearer ${token}`

            setData({
                token,
                user: JSON.parse(user)
            })
        }
    },[])

    return (
        <AuthContext.Provider value={{ signIn, user: data.user, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext)

    return context
}

export { AuthProvider, useAuth }