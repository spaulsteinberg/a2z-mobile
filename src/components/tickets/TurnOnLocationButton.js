import React from 'react'
import { StyleSheet } from 'react-native'
import { AZButton } from '../ui'

const TurnOnLocationButton = ({ onPress }) => {
    return (
        <AZButton
            title="Turn on Location to see Tickets"
            outerStyle={styles.turnOnLocationButtonOuter}
            onPress={onPress}
        />
    )
}

const styles = StyleSheet.create({
    turnOnLocationButtonOuter: {
      alignItems: 'center',
      marginVertical: 24
    },
})

export default TurnOnLocationButton