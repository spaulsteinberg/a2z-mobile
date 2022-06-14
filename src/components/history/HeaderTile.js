import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AZTile } from '../ui'

const HeaderTile = ({ tileColor, number, icon, containerText}) => {
    return (
        <AZTile height="100%" color={tileColor} innerStyle={styles.tileInner}>
            <View style={styles.section}>
                <Text style={[styles.sectionText, styles.section]}>{number}</Text>
                { icon }
                <Text style={styles.section}>{containerText}</Text>
            </View>
        </AZTile>
    )
}

const styles = StyleSheet.create({
    section: {
        flex: 1,
        alignItems: 'center'
    },
    sectionText: {
        fontSize: 18,
        textAlign: 'center'
    },
    tileInner: {
        padding: 8
    }
})

export default HeaderTile