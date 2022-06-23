import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import { AZButton } from '../ui'
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../styles/Colors';

const AppliedTextCheckIcon = () => {
    return (
        <View style={styles.appliedText}>
            <Ionicons name="checkmark" size={20} color="green" />
            <Text style={styles.successText}>Applied</Text>
        </View>
    )
}

const TicketApplicationStatus = ({ onPress, userHasApplied, loading }) => {
    return (
        <>
            {
                loading ? <ActivityIndicator size={20} color={Colors.primary} style={{ paddingBottom: 12 }} /> : !userHasApplied ?
                    <AZButton title="Apply!" onPress={onPress} innerStyle={styles.btnInnerStyle} outerStyle={styles.btnOuterStyle} />
                    : <AppliedTextCheckIcon loading={loading} />
            }
        </>
    )
}

const styles = StyleSheet.create({
    btnOuterStyle: {
        marginBottom: 12
    },
    appliedText: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 12
    },
    successText: {
        color: "green"
    },
    btnInnerStyle: {
        paddingHorizontal: 24
    }
})

export default TicketApplicationStatus