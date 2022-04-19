import React from 'react'
import { View, StyleSheet, useWindowDimensions } from 'react-native'
import globalStyles from '../../styles/global'

/* Component for a single item in the screen - such as a login card */
const AZSingleView = ({ children }) => {
    const { width } = useWindowDimensions()

    return (
        <View style={[styles.screen, { marginTop: width > 380 ? 24 : 48 }, globalStyles.screenContainer]}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    }
})

export default AZSingleView