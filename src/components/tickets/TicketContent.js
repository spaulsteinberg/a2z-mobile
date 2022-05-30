import React from 'react'
import TicketFeed from './TicketFeed'
import TurnOnLocationButton from './TurnOnLocationButton'

const TicketContent = ({ userLocation, askForLocationHandler }) => {
    return (
        <>
            {
                userLocation ? <TicketFeed askForLocationHandler={askForLocationHandler} /> : <TurnOnLocationButton onPress={askForLocationHandler} />
            }
        </>
    )
}

export default TicketContent