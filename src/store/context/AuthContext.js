import { createContext, useState, useEffect } from 'react'
import { ActivityIndicator } from 'react-native'
import { auth } from '../../firebase/config'

export const AuthContext = createContext({
    user: null,
    logout: () => {}
})

const AuthContextProvider = ({ children }) => {

    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setUser(user)
            setLoading(false)
        })
        return unsubscribe;
    }, [])

    const logout = () => {
        setUser(null)
    }

    const value = {
        user,
        logout
    }

    return <AuthContext.Provider value={value}>
        { loading ? <ActivityIndicator /> : children }
        </AuthContext.Provider>
}

export default AuthContextProvider