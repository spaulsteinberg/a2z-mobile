import React from 'react'
import { StyleSheet, View } from 'react-native'
import Colors from '../../styles/Colors'
import { AZIconTextButton } from '../ui'
import { Feather } from '@expo/vector-icons';

const TicketMapButton = ({ onPress }) => {
    return (
        <View style={styles.viewMapContainer}>
            <AZIconTextButton icon={<Feather name="map" size={16} color="white" />} text="View Map" onPress={onPress} iconLeft innerStyle={{ backgroundColor: Colors.primary600 }} rippleColor="yellow" />
        </View>
    )
}

const styles = StyleSheet.create({
    viewMapContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 8
    }
})

export default TicketMapButton