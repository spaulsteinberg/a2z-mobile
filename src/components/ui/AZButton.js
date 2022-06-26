import React from 'react'
import { Pressable, View, Text, StyleSheet } from 'react-native'
import Colors from '../../styles/Colors';
import PropTypes from 'prop-types';

const AZButton = ({ title, onPress, rippleColor, outerStyle, innerStyle, textStyle, disabled }) => {
    return (
        <View style={[styles.outerContainer, outerStyle]}>
            <Pressable
                style={({ pressed }) => pressed ? [styles.innerContainer, innerStyle, styles.pressed] : [styles.innerContainer, innerStyle, disabled && styles.disabled]}
                onPress={onPress}
                android_ripple={{ color: rippleColor ? rippleColor : Colors.primary600 }}
                disabled={disabled}
            >
                <Text style={[styles.text, textStyle]}>{title}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    outerContainer: {
        borderRadius: 5,
        overflow: 'hidden'
    },
    innerContainer: {
        paddingVertical: 12,
        paddingHorizontal: 8,
        elevation: 2,
        backgroundColor: Colors.primary
    },
    text: {
        color: 'white',
        textAlign: 'center'
    },
    pressed: {
        opacity: 0.75
    },
    disabled: {
        opacity: .5
    }
})

AZButton.propTypes = {
    title: PropTypes.string,
    onPress: PropTypes.func,
    rippleColor: PropTypes.string,
    outerStyle: PropTypes.any,
    innerStyle: PropTypes.any,
    textStyle: PropTypes.any,
    disabled: PropTypes.bool,
}

export default AZButton