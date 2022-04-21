import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const AZDivider = ({ style, children }) => {
  return (
    <View style={[styles.container, style]}>
        <View style={styles.line}></View>
        <Text style={styles.text}>{ children }</Text>
        <View style={styles.line}></View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    line: {
        backgroundColor: 'black',
        height: 1,
        flex: 1,
        alignSelf: 'center'
    },
    text: {
        paddingHorizontal: 10,
        alignSelf: 'center'
    }
})

export default AZDivider