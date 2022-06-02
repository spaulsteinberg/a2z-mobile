import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import Colors from '../../styles/Colors'
import globalStyles from '../../styles/global'
import TicketCardTopRow from './TicketCardTopRow';
import TicketCardBottomRow from './TicketCardBottomRow';

const TicketCard = ({ data, onPress, outerStyle, innerStyle }) => {
    return (
        <View style={[styles.container, globalStyles.iosShadow, outerStyle]}>
            <Pressable onPress={onPress} android_ripple={{ color: "#fff" }} style={({ pressed }) => [styles.innerContainer, innerStyle, pressed && styles.pressed]}>
                <View style={styles.cardBody}>
                    <TicketCardTopRow origin={data.origin} destination={data.destination} />
                    <TicketCardBottomRow distance={data.distance} duration={data.duration} ratePerMile={data.ratePerMile} />
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
        height: 125,
        width: '100%',
        borderRadius: 8,
        padding: 8,
    },
    innerContainer: {
        height: '100%',
        width: '100%',
    },
    pressed: {
        opacity: 0.5,
    },
    cardBody: {
        flex: 1
    }
})

export default TicketCard