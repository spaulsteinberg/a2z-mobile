import React from 'react'
import { AZCard } from '../ui'
import TicketDetailProfile from './TicketDetailProfile'

const TicketDetailBottomCard = ({ cardStyle, profile }) => {
    return (
        <AZCard style={cardStyle}>
            <TicketDetailProfile 
                postName={profile.firstName + " " + profile.lastName} 
                postCompany={profile.companyName} 
                postPhoto={profile.photoUrl} />
        </AZCard>
    )
}

export default TicketDetailBottomCard