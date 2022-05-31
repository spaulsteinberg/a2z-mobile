import { useNavigation } from '@react-navigation/native'
import React from 'react'
import RefreshLocationFeed from './RefreshLocationFeed'
import TicketCard from './TicketCard'

const TicketFeed = ({ askForLocationHandler }) => {
  const navigation = useNavigation()

  const handlePress = indx => {
    navigation.navigate("TicketDetail", { id: indx })
  }

  return (
    <>
        <RefreshLocationFeed onPress={askForLocationHandler} />
        <TicketCard onPress={() => handlePress(1)} />
        <TicketCard onPress={() => handlePress(2)} />
        <TicketCard onPress={() => handlePress(3)} />
        <TicketCard onPress={() => handlePress(4)} />
        <TicketCard onPress={() => handlePress(5)} />
        <TicketCard onPress={() => handlePress(6)} />
    </>
  )
}

export default TicketFeed