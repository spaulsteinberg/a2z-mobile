import React from 'react'
import RefreshLocationFeed from './RefreshLocationFeed'
import TurnOnLocationButton from './TurnOnLocationButton'

const TicketContent = ({ userLocation, askForLocationHandler }) => {
    return (
        <>
            {
                userLocation ? <RefreshLocationFeed onPress={askForLocationHandler} /> : <TurnOnLocationButton onPress={askForLocationHandler} />
            }
        </>
    )
}

export default TicketContent