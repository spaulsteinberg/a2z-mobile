import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Colors from '../../styles/Colors'

const AZFeedback = ({ message, severity, ...rest }) => {
  return (
    <View {...rest}>
        <Text style={severity === "error" ? styles.error : severity === "success" ? styles.success : null}>{message}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    error: {
        color: Colors.error
    },
    success: {
      color: 'green'
    }
})

export default AZFeedback