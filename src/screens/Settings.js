import React from 'react'
import { View, Text, Alert, StyleSheet } from 'react-native'
import { AZButton } from '../components/ui'
import { logout } from '../firebase/api'
import Colors from '../styles/Colors'

const Settings = () => {

    const handleLogoutClick = () => {
        Alert.alert('Logout', 'Are you sure you want to logout?', [
            { text: 'Back', style: 'cancel' },
            { text: 'Logout', style: 'destructive', 
                onPress: () => logout().then(_ => console.log("logged out")).catch(err => console.log(err))}
        ])
    }
  return (
    <View style={styles.container}>
        <Text>My Profile</Text>
        <Text>Email Change</Text>
        <Text>Password Change</Text>
        <AZButton title="Logout" innerStyle={styles.buttonStyle} onPress={handleLogoutClick} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 24,
        marginVertical: 12,
        justifyContent: 'flex-start'
    },
    buttonStyle: {
        backgroundColor: Colors.error
    }
})

export default Settings