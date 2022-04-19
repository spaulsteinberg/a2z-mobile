import React from 'react'
import { Pressable, View, Text, StyleSheet } from 'react-native'
import Colors from '../../styles/Colors'

const AZButton = ({ title, onPress, rippleColor, outerStyle, innerStyle, textStyle }) => {
    return (
        <View style={[styles.outerContainer, outerStyle]}>
            <Pressable
                style={({ pressed }) => pressed ? [styles.innerContainer, innerStyle, styles.pressed] : [styles.innerContainer, innerStyle]}
                onPress={onPress}
                android_ripple={{ color: rippleColor ? rippleColor : Colors.primary600 }}
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
    }
})

export default AZButton