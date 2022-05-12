import React from 'react'
import { View, Alert, StyleSheet } from 'react-native'
import SettingTab from '../components/settings/SettingTab'
import { AZButton } from '../components/ui'
import { logout } from '../firebase/api'
import Colors from '../styles/Colors'

const Profile = () => {
    

    const handleLogoutClick = () => {
        Alert.alert('Logout', 'Are you sure you want to logout?', [
            { text: 'Back', style: 'cancel' },
            { text: 'Logout', style: 'destructive', 
                onPress: () => logout().then(_ => console.log("logged out")).catch(err => console.log(err))}
        ])
    }
  return (
    <View style={styles.container}>
        <SettingTab text="My Profile" onPress={() => console.log("click")}/>
        <SettingTab text="Change Email" onPress={() => console.log("click")}/>
        <SettingTab text="Change Password" onPress={() => console.log("click")}/>
        <AZButton title="Logout" outerStyle={styles.buttonOuter} innerStyle={styles.buttonStyle} onPress={handleLogoutClick} />
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
    },
    buttonOuter: {
        marginVertical: 12
    }
})

export default Profile