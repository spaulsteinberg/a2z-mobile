import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Platform } from 'react-native'
import Colors from '../../styles/Colors'

const AZInput = React.forwardRef(({ label, style, disabled, onBlur, ...rest }, ref) => {
    const [inFocus, setInFocus] = useState(false)

    /* const handleBlur = () => {
        setInFocus(false)
        onBlur()
    } */

    return (
        <View style={[styles.container, style]}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                ref={ref}
                style={[Platform.OS === 'web' && { outlineStyle: 'none' }, styles.input, disabled && styles.disabled, inFocus && styles.inFocus]}
                editable={!disabled}
                onFocus={() => setInFocus(true)}
                /* onBlur={() => setInFocus(false)} */
                {...rest}
            />
        </View>
    )
})

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
    },
    inFocus: {
        borderColor: Colors.primary,
        shadowColor: Colors.primary,
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 4,
        shadowOpacity: 0.9,
    }
})

export default AZInput