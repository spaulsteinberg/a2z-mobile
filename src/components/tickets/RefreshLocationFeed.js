import React from 'react'
import { StyleSheet } from 'react-native'
import { AZIconButton } from '../ui'
import Colors from '../../styles/Colors'

const RefreshLocationFeed = ({ onPress }) => {
    return (
        <AZIconButton icon="refresh" size={24} outerStyle={styles.outerRefresh} innerStyle={styles.innerRefresh} color="white" onPress={onPress} />
    )
}

const styles = StyleSheet.create({
    outerRefresh: {
        backgroundColor: Colors.secondary600,
        borderRadius: 8,
    },
    innerRefresh: {
        width: '100%',
        alignItems: 'center'
    }
})

export default RefreshLocationFeed