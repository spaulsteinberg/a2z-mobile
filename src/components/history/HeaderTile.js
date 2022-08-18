import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import { AZTile } from '../ui'

const HeaderTile = ({ loading, tileColor, number, icon, containerText, loadingColor = "white" }) => {
    return (
        <AZTile height="100%" color={tileColor} innerStyle={styles.tileInner}>
            <View style={styles.section}>
                {
                    !loading ? (
                        <>
                            <Text style={[styles.sectionText, styles.section]}>{number}</Text>
                            { icon }
                            <Text style={styles.section}>{containerText}</Text>
                        </>
                    ) : <ActivityIndicator size="large" color={loadingColor} />
                }
            </View>
        </AZTile>
    )
}

const styles = StyleSheet.create({
    section: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    sectionText: {
        fontSize: 18,
        textAlign: 'center'
    },
    tileInner: {
        padding: 8,
    }
})

export default HeaderTile