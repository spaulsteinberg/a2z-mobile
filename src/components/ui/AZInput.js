import React from 'react'
import { View, Text, TextInput, StyleSheet, Platform } from 'react-native'
import Colors from '../../styles/Colors'

const AZInput = React.forwardRef(({ label, style, disabled, invalid, ...rest }, ref) => {
    return (
        <View style={[styles.container, style]}>
            { label && <Text style={styles.label}>{label}</Text> }
            <TextInput
                ref={ref}
                style={[Platform.OS === 'web' && { outlineStyle: 'none' }, styles.input, invalid && styles.error, disabled && styles.disabled]}
                editable={!disabled}
                {...rest}
            />
        </View>
    )
})

const styles = StyleSheet.create({
    container: {
        marginVertical: 12,
    },
    label: {
        marginBottom: 4
    },
    input: {
        padding: 8,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: Colors.primary,
    },
    error: {
        borderColor: Colors.error
    },
    disabled: {
        backgroundColor: 'lightgray'
    }
})

export default AZInput