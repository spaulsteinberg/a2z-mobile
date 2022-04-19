import React from 'react'
import { View, StyleSheet } from 'react-native'
import globalStyles from '../../styles/global'

const AZCard = ({ style, children }) => {
  return (
    <View style={[styles.container, globalStyles.iosShadow, style]}>
        { children }
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '95%',
        maxWidth: 350,
        backgroundColor: '#fff',
        elevation: 4,
        borderRadius: 10,
        paddingTop: 8,
        paddingBottom: 12,
        paddingHorizontal: 12
    }
})

export default AZCard