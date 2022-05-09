import React from 'react'
import { View, Text, Button } from 'react-native'
import { logout } from '../firebase/api'
const Settings = () => {
  return (
    <View>
        <Text>Settings</Text>
        <Button onPress={() => logout().catch(err => console.log(err))} title="Logout" />
    </View>
  )
}

export default Settings