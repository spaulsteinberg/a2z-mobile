import React from 'react'
import { View, Pressable, Text, StyleSheet } from 'react-native'
import Colors from '../../styles/Colors'
import PropTypes from 'prop-types'

const AZIconTextButton = ({ icon, text, iconLeft, onPress, rippleColor, outerStyle, innerStyle, textStyle, disabled }) => {
    return (
        <View style={[styles.outerContainer, outerStyle]}>
            <Pressable
                style={({ pressed }) => pressed ? [styles.innerContainer, innerStyle, styles.pressed] : [styles.innerContainer, innerStyle, disabled && styles.disabled]}
                onPress={onPress}
                android_ripple={{ color: rippleColor ? rippleColor : Colors.primary600 }}
                disabled={disabled}
            >
                <View style={styles.iconContainer}>
                    {iconLeft ? icon : null}
                    <View style={iconLeft ? styles.textMarginLeft : styles.textMarginRight}>
                        <Text style={[styles.text, textStyle]}>{text}</Text>
                    </View>
                    {!iconLeft ? icon : null}
                </View>
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
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    textMarginLeft: {
        marginLeft: 8
    },
    textMarginRight: {
        marginRight: 8
    }
})

AZIconTextButton.propTypes = {
    icon: PropTypes.node.isRequired,
    text: PropTypes.string,
    onPress: PropTypes.func.isRequired,
    rippleColor: PropTypes.string,
    outerStyle: PropTypes.any,
    innerStyle: PropTypes.any,
    textStyle: PropTypes.any,
    disabled: PropTypes.bool,
}

export default AZIconTextButton