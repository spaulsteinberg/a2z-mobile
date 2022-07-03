import React from 'react'
import { StyleSheet, View } from 'react-native'
import { AZCard, AZIconTextButton } from '../ui'
import TicketDetailBottomRows from './TicketDetailBottomRows'
import TicketDetailCenterRow from './TicketDetailCenterRow'
import TicketDetailTopRow from './TicketDetailTopRow'
import { Feather } from '@expo/vector-icons';
import Colors from '../../styles/Colors'

const TicketDetailTopCard = ({ ticket, cardStyle, rowStyle }) => {
    return (
        <AZCard style={[cardStyle, styles.topCard]}>
            <TicketDetailTopRow origin={ticket.start_city_state} destination={ticket.end_city_state} rowStyle={rowStyle} />
            <TicketDetailCenterRow 
                distance={ticket.distance + " mi"} 
                duration={ticket.est_duration} 
                ratePerMile={ticket.rate_per_mile} 
                rowStyle={rowStyle} 
            />
            <TicketDetailBottomRows 
                total={ticket.total}
                date={ticket.created_at}
                description={ticket.description}
                rowStyle={rowStyle} 
            />
            <View style={styles.viewMapContainer}>
                <AZIconTextButton icon={<Feather name="map" size={16} color="white" />} text="View Map" onPress={() => console.log("press")} iconLeft innerStyle={{backgroundColor: Colors.primary600}} rippleColor="yellow" />
            </View>
        </AZCard>
    )
}

const styles = StyleSheet.create({
    topCard: {
        marginBottom: 24
    },
    viewMapContainer: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center', 
        marginTop: 8
    }
})

export default TicketDetailTopCard