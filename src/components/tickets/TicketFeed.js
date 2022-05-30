import React from 'react'
import AZIconInput from '../ui/AZIconInput'
import RefreshLocationFeed from './RefreshLocationFeed'
import TicketCard from './TicketCard'

const TicketFeed = ({ askForLocationHandler }) => {
  return (
    <>
        <RefreshLocationFeed onPress={askForLocationHandler} />
        <TicketCard onPress={() => console.log("hello world")} />
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
    </>
  )
}

export default TicketFeed