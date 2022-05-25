import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Colors from '../../styles/Colors'
import { AZButton } from '../ui'

const ProfileError = ({ handleReloadProfile }) => {
    return (
        <View style={styles.errorWrapper}>
            <Text style={[styles.error, styles.activity]}>An error occurred loading your profile. Please reload the page or try again later.</Text>
            <AZButton title="Try Again" innerStyle={styles.errorBtn} onPress={handleReloadProfile} />
        </View>
    )
}

const styles = StyleSheet.create({
    activity: {
        marginTop: 100,
        marginBottom: 25,
    },
    error: {
        textAlign: 'center',
        color: Colors.error
    },
    errorBtn: {
        backgroundColor: Colors.secondary
    },
    errorWrapper: { alignItems: 'center' }
})

export default ProfileError