import React from 'react'
import { StyleSheet } from 'react-native'
import { AZCard } from '../ui'
import TicketDetailBottomRows from './TicketDetailBottomRows'
import TicketDetailCenterRow from './TicketDetailCenterRow'
import TicketDetailTopRow from './TicketDetailTopRow'

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
        </AZCard>
    )
}

const styles = StyleSheet.create({
    topCard: {
        marginBottom: 24
    }
})

export default TicketDetailTopCard