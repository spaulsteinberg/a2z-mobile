import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Colors from '../../styles/Colors'
import PropTypes from 'prop-types'

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

AZFeedback.propTypes = {
  message: PropTypes.string.isRequired,
  severity: PropTypes.string
}

export default AZFeedback