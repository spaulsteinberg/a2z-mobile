import React, { useState } from 'react'
import { View, Text, Alert, ScrollView, StyleSheet, ActivityIndicator } from 'react-native'
import { requestForegroundPermissionsAsync, getCurrentPositionAsync } from 'expo-location'
import { AZButton } from '../components/ui'
import globalStyles from '../styles/global'
import Colors from '../styles/Colors'

const TicketScreen = () => {

  const [location, setLocation] = useState(null)
  const [locationLoading, setLocationLoading] = useState(false)

  const requestLocationPermissions = async () => {
    let { status } = await requestForegroundPermissionsAsync()
    return status === 'granted'
  }

  const askForLocationHandler = async () => {
    setLocationLoading(true)
    let userHasGrantedPermissions = await requestLocationPermissions()
    if (!userHasGrantedPermissions) return Alert.alert("Permission denied.", "To use this part of the application, you will need to grant location permission.")

    let location = await getCurrentPositionAsync()
    console.log(location)
    setLocation(location)
    setLocationLoading(false)
  }

  let content;
  if (locationLoading) content = <ActivityIndicator size="large" color={Colors.primary} />
  else {
    content = <>
    {
          location ? <Text>You have a location</Text>
          : <AZButton 
          title="Turn on Location to see Tickets" 
          outerStyle={styles.turnOnLocationButtonOuter} 
          onPress={askForLocationHandler}
          />
        }
    </>
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={globalStyles.screenContainer}>
        { content }
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1
  },
  turnOnLocationButtonOuter: {
    alignItems: 'center',
    marginVertical: 24
  }
})

export default TicketScreen