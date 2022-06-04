import React from 'react'
import { Text } from 'react-native'
import RefreshLocationFeed from './RefreshLocationFeed'

const TicketFeedHeader = ({ onPress, numResults }) => {
    return (
        <>
            <RefreshLocationFeed onPress={onPress} />
            <Text style={{ textAlign: 'center', marginTop: 8 }}>Displaying all {numResults} results.</Text>
        </>
    )
}

export default TicketFeedHeader