import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { getUserToken } from '../../firebase/api'
import getAllTickets from '../../store/redux/effects/ticketEffects'
import Colors from '../../styles/Colors'
import RefreshLocationFeed from './RefreshLocationFeed'
import TicketCard from './TicketCard'

const TicketFeed = ({ askForLocationHandler }) => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const { loading, data, error } = useSelector(state => state.tickets)

  useEffect(() => {
    const hydrateFeed = async () => {
      dispatch(getAllTickets(await getUserToken()))
    }

    hydrateFeed()
  }, [])

  const handlePress = indx => {
    navigation.navigate("TicketDetail", { id: indx })
  }

  const DATA = [
    { id: 1, value: 1 },
    { id: 2, value: 2 },
    { id: 3, value: 3 },
    { id: 4, value: 4 },
    { id: 5, value: 5 },
    { id: 6, value: 6 }
  ]

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <RefreshLocationFeed onPress={askForLocationHandler} />
        {loading && <ActivityIndicator size={24} color={Colors.primary} />}
        {data && <FlatList numColumns={1} data={data} renderItem={({ item }) => <TicketCard data={item} onPress={() => handlePress(item.ticketId)} />} keyExtractor={item => item.ticketId} />}
        {error && <Text>error</Text>}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default TicketFeed