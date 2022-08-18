import React from 'react'
import { Pressable, StyleSheet, View, Text } from 'react-native'
import Colors from '../../styles/Colors'
import globalStyles from '../../styles/global'
import PropTypes from 'prop-types'

const AZTile = ({ title, outerStyle, innerStyle, textStyle, children, onPress = () => {}, color = Colors.primary, height = 150 }) => {
  return (
    <View style={[styles.box, globalStyles.iosShadow, outerStyle, { backgroundColor: color, height: height }]}>
            <Pressable onPress={onPress} style={({ pressed }) => [pressed && styles.pressed, styles.button]} android_ripple={{ color: "#fff" }}>
                <View style={[styles.innerContainer, innerStyle]}>
                    { title && <Text style={[styles.text, textStyle]}>{title}</Text> }
                    { children }
                </View>
            </Pressable>
        </View>
  )
}

const styles = StyleSheet.create({
    box: {
        flex: 1,
        borderRadius: 8,
        elevation: 4,
        margin: 8,
        overflow: 'hidden',
    },
    button: {
        flex: 1
    },
    pressed: {
        opacity: 0.5
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: "#fff"
    }
})

AZTile.propTypes = {
    title: PropTypes.string,
    outerStyle: PropTypes.any,
    innerStyle: PropTypes.any,
    textStyle: PropTypes.any,
    color: PropTypes.string,
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

export default AZTile