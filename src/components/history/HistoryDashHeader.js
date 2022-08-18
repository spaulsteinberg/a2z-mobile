import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Colors from '../../styles/Colors'
import { AZTile } from '../ui'
import HistoryHeader from './HistoryHeader'
import { FontAwesome, Octicons, Feather } from '@expo/vector-icons';
import HeaderTile from './HeaderTile'

const HistoryDashHeader = ({ loading, earned, miles, trips }) => {

    const outerTileStyle = { minHeight: 200 }
    const innerTileStyle = { alignItems: 'flex-start', justifyContent: 'flex-start', width: '100%' }
    const UNITS = ["", "K", "M", "G"];

    const formatNumber = (number) => {
        if (number < 1000) return number;
        let unit = 0;
        while (number >= 1000) {
            unit = unit + 1;
            number = Math.floor(number / 100) / 10;
        }
        return number + UNITS[unit]
    }

    return (
        <View style={styles.container}>
            <AZTile color={Colors.secondary800} height="100%" outerStyle={outerTileStyle} innerStyle={innerTileStyle}>
                <View style={styles.innerContainer}>
                    <HistoryHeader />
                    <View style={styles.statisticSection}>
                        <HeaderTile loading={loading} tileColor="#ccffb3" number={formatNumber(earned)} icon={<FontAwesome style={styles.section} name="dollar" size={24} color="green" />} containerText="Earned" />
                        <HeaderTile loading={loading} tileColor="#99ddff" number={`${formatNumber(miles)}`} icon={<Octicons style={styles.section} name="milestone" size={24} color={Colors.secondary600} />} containerText="Miles" />
                        <HeaderTile loading={loading} tileColor="#df80ff" number={trips} icon={<Feather style={styles.section} name="check" size={24} color={Colors.primary} />} containerText="Trips" />
                    </View>
                </View>
            </AZTile>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%"
    },
    innerContainer: {
        flex: 1,
        flexGrow: 1,
        width: '100%'
    },
    statisticSection: {
        flex: 2,
        flexDirection: 'row'
    },
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

export default HistoryDashHeader