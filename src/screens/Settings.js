import React from 'react'
import { View, Alert, StyleSheet, useWindowDimensions } from 'react-native'
import SettingTab from '../components/settings/SettingTab'
import { AZButton } from '../components/ui'
import { logout } from '../firebase/api'
import Colors from '../styles/Colors'

const Settings = ({ navigation }) => {

    const { width } = useWindowDimensions()

    const containerStyle = {
        alignItems: `${width > 500 ? 'center' : 'stretch'}`
    }
    const innerContainerStyle = {
        width: `${width > 500 ? 60 : 100}%`,
        height: `${width > 500 ? 60 : 100}%`
    }

    const handleLogoutClick = () => {
        Alert.alert('Logout', 'Are you sure you want to logout?', [
            { text: 'Back', style: 'cancel' },
            {
                text: 'Logout', style: 'destructive',
                onPress: () => logout().then(_ => console.log("logged out")).catch(err => console.log(err))
            }
        ])
    }

    return (
        <View style={[styles.container, containerStyle]}>
            <View style={innerContainerStyle}>
                <SettingTab text="My Profile" onPress={() => console.log("click")} />
                <SettingTab text="Change Email" onPress={() => navigation.navigate("EmailChange")} />
                <SettingTab text="Change Password" onPress={() => console.log("click")} />
                <AZButton title="Logout" outerStyle={styles.buttonOuter} innerStyle={styles.buttonStyle} onPress={handleLogoutClick} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 24,
        marginVertical: 12,
        justifyContent: 'flex-start',
    },
    buttonStyle: {
        backgroundColor: Colors.error
    },
    buttonOuter: {
        marginVertical: 12
    }
})

export default Settings