import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import globalStyles from '../../styles/global'

const SignupScreen = ({ route, navigation }) => {
  return (
    <View style={[styles.screen, globalStyles.screenContainer]}>
        <Text>Hello world</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default SignupScreen