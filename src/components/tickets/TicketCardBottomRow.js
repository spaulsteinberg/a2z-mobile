import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Colors from '../../styles/Colors'
import { Ionicons, Foundation, MaterialCommunityIcons } from '@expo/vector-icons';

const TicketCardBottomRow = ({ distance, duration, ratePerMile }) => {
    return (
        <>
            <View style={styles.moreInfo}>
                <View style={styles.moreInfoTack}>
                    <Text>{distance} mi</Text>
                </View>
                <View style={styles.moreInfoTack}>
                    <Text>{duration.replace("hours", "h").replace("day", "d").replace("mins", "m")}</Text>
                </View>
                <View style={styles.moreInfoTack}>
                    <Text>{ratePerMile}/mi</Text>
                </View>
            </View>
            <View style={styles.moreInfo}>
                <View style={styles.moreInfoTack}>
                    <MaterialCommunityIcons name="road" size={24} color={Colors.secondary} />
                </View>
                <View style={styles.moreInfoTack}>
                    <Ionicons name="hourglass-outline" size={24} color={Colors.secondary} />
                </View>
                <View style={styles.moreInfoTack}>
                    <Foundation name="dollar-bill" size={24} color={Colors.secondary} />
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    moreInfo: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    moreInfoTack: {
        alignItems: 'center',
        marginHorizontal: 16,
        flex: 1
    }
})

export default TicketCardBottomRow