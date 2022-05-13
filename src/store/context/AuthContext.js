import { createContext, useState, useEffect } from 'react'
import { ActivityIndicator } from 'react-native'
import { auth } from '../../firebase/config'

export const AuthContext = createContext({
    user: null,
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

    const value = {
        user,
    }

    return <AuthContext.Provider value={value}>
        { loading ? <ActivityIndicator style={{marginTop: 100}} /> : children }
        </AuthContext.Provider>
}

export default AuthContextProvider