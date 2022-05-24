import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Colors from '../../styles/Colors'

const ProfileSubmitFeedback = ({ message, severity }) => {
  return (
    <View style={styles.container}>
        <Text style={[styles.text, severity === "error" ? styles.error : styles.success]}>{ message }</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center'
    },
    error: {
        color: Colors.error
    },
    success: {
        color: "green"
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 12
    }
})

export default ProfileSubmitFeedback