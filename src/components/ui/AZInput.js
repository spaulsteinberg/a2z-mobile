import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import Colors from '../../styles/Colors'

const AZInput = ({ label, style, disabled, ...rest }) => {
  return (
    <View style={[styles.container, style]}>
        <Text style={styles.label}>{label}</Text>
        <TextInput style={[styles.input, disabled && styles.disabled]} editable={!disabled} {...rest} />
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
        borderColor: Colors.primary
    },
    disabled: {
        backgroundColor: 'lightgray'
    }
})

export default AZInput