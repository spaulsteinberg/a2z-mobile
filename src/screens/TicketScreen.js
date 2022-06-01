import React, { useState } from 'react'
import { View, Alert, ScrollView, StyleSheet, ActivityIndicator, Button } from 'react-native'
import { requestForegroundPermissionsAsync, getCurrentPositionAsync } from 'expo-location'
import globalStyles from '../styles/global'
import Colors from '../styles/Colors'
import { useUserLocation } from '../store/context/LocationContext'
import TicketContent from '../components/tickets/TicketContent'

const TicketScreen = () => {

  const [locationLoading, setLocationLoading] = useState(false)
  const { loading, userLocation, setUserLocationStorage } = useUserLocation()

  const requestLocationPermissions = async () => {
    let { status } = await requestForegroundPermissionsAsync()
    return status === 'granted'
  }

  const askForLocationHandler = async () => {
    setLocationLoading(true)
    let userHasGrantedPermissions = await requestLocationPermissions()
    if (!userHasGrantedPermissions) return Alert.alert("Permission denied.", "To use this part of the application, you will need to grant location permission.")

    let location = await getCurrentPositionAsync()
    setLocationLoading(false)
    await syncUserLocationWithContext(location)
  }

  const syncUserLocationWithContext = async (location) => {
    try {
      await setUserLocationStorage(location)
    } catch (err) {
      console.log("SYNC ERR", err)
    }
  }

  let content;
  if (locationLoading || loading) content = <ActivityIndicator size="large" color={Colors.primary} />
  else if (!locationLoading && !loading) {
    content = <TicketContent userLocation={userLocation} askForLocationHandler={askForLocationHandler} />
  }

  return (
    <View style={[globalStyles.screenContainer, styles.container]}>
      {content}
    </View>
  )
}

const styles = StyleSheet.create({
  turnOnLocationButtonOuter: {
    alignItems: 'center',
    marginVertical: 24
  },
  outerRefresh: {
    backgroundColor: Colors.secondary600
  },
  container: {
    flex: 1
  }
})

export default TicketScreen