import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

const AZInput = ({ label, style, ...rest }) => {
  return (
    <View style={[styles.container, style]}>
        <Text style={styles.label}>{label}</Text>
        <TextInput style={styles.input} {...rest} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 12
    },
    label: {
        marginBottom: 4
    },
    input: {
        padding: 8,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'black'
    }
})

export default AZInput