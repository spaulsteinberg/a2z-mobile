import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import Colors from '../../styles/Colors'
import globalStyles from '../../styles/global'

const TicketCard = ({ onPress, outerStyle, innerStyle}) => {
  return (
    <View style={[styles.container, globalStyles.iosShadow, outerStyle]}>
        <Pressable onPress={onPress} android_ripple={{color: "#fff" }} style={({pressed}) => [styles.innerContainer, innerStyle, pressed && styles.pressed]}>
            <View>
                <Text>Hello</Text>
            </View>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 12,
        backgroundColor: Colors.primary900,
        elevation: 4,
        height: 100,
        width: '100%',
        borderRadius: 8
    },
    innerContainer: {
        height: '100%',
        width: '100%'
    },
    pressed: {
        opacity: 0.5,
    },
})

export default TicketCard