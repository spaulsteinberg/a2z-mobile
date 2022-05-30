import React, { useLayoutEffect } from 'react'
import { View, Alert, StyleSheet, useWindowDimensions, ScrollView, Platform } from 'react-native'
import { useDispatch } from 'react-redux'
import SettingTab from '../components/settings/SettingTab'
import { AZButton } from '../components/ui'
import { logout } from '../firebase/api'
import { resetProfile } from '../store/redux/slices/profileSlice'
import Colors from '../styles/Colors'

const Settings = ({ navigation }) => {

    useLayoutEffect(() => {
        navigation.setOptions({ headerRight: () => null })
    }, [])

    const dispatch = useDispatch()

    const { width } = useWindowDimensions()

    const containerStyle = {
        alignItems: `${width > 500 ? 'center' : 'stretch'}`
    }
    const innerContainerStyle = {
        width: `${width > 500 ? 60 : 100}%`,
        height: `${width > 500 ? 60 : 100}%`
    }

    const resetNonAuthStates = () => {
        dispatch(resetProfile())
    }

    // add any cleanup here
    const cleanupAfterLogout = () => {
        resetNonAuthStates()
        console.log("logged out")
    }

    const handleLogoutClick = () => {
        if (Platform.OS === 'web') {
            logout().then(_ => cleanupAfterLogout()).catch(err => console.log(err))
        } else {
            Alert.alert('Logout', 'Are you sure you want to logout?', [
                { text: 'Back', style: 'cancel' },
                {
                    text: 'Logout', style: 'destructive',
                    onPress: () => logout().then(_ => cleanupAfterLogout()).catch(err => console.log(err))
                }
            ])
        }
    }

    return (
        <ScrollView>
            <View style={[styles.container, containerStyle]}>
                <View style={innerContainerStyle}>
                    <SettingTab text="My Profile" onPress={() => navigation.navigate("ProfileScreen")} />
                    <SettingTab text="Change Email" onPress={() => navigation.navigate("CredentialChange", { type: "email" })} />
                    <SettingTab text="Change Password" onPress={() => navigation.navigate("CredentialChange", { type: "password" })} />
                    <AZButton title="Logout" outerStyle={styles.buttonOuter} innerStyle={styles.buttonStyle} onPress={handleLogoutClick} />
                </View>
            </View>
        </ScrollView>
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