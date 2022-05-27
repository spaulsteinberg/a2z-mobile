import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState, createContext, useContext, useEffect } from 'react'

const KEY = "A2Z_LOCATION"

const LocationContext = createContext()

export const useUserLocation = () => useContext(LocationContext)

export const LocationProvider = ({ children }) => {
    const [loading, setLoading] = useState(false)
    const [userLocation, setUserLocation] = useState()

    useEffect(() => {
        setLoading(true)
        AsyncStorage.getItem(KEY)
        .then(value => {
            if (value) {
                setUserLocation(value)
            }
        })
        .catch(err => console.log("Could not retrieve item", err))
        .finally(() => setLoading(false))
    }, [])

    const setUserLocationStorage = async (location) => {
        try {
            await AsyncStorage.setItem(KEY, JSON.stringify(location.coords))
            setUserLocation(location.coords)
        } catch (err) {
            console.log("SET ERR", err)
        }
    }

    const getUserLocation = async () => {
        if (userLocation) return userLocation
        
        try {
            return await AsyncStorage.getItem(KEY)
        } catch (err) {
            console.log(err)
        }
    }

    const clearUserLocationStorage = async () => {
        try {
            await AsyncStorage.removeItem(KEY);
            setUserLocation(null)
        } catch (err) { console.log(err)}
    }

    const value = {
        loading,
        userLocation,
        setUserLocationStorage,
        getUserLocation,
        clearUserLocationStorage,
    }

    return <LocationContext.Provider value={value}>{children}</LocationContext.Provider>
}