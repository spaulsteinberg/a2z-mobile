import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Colors from '../../styles/Colors'

const AZFeedback = ({ message, severity }) => {
  return (
    <View>
        <Text style={severity === "error" ? styles.error : null}>{message}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    error: {
        color: Colors.error
    }
})

export default AZFeedback