import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { getUserToken } from '../../firebase/api'
import getAllTickets from '../../store/redux/effects/ticketEffects'
import Colors from '../../styles/Colors'
import RefreshLocationFeed from './RefreshLocationFeed'
import TicketCard from './TicketCard'
import TicketFeedError from './TicketFeedError'

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

  const handlePress = id => {
    navigation.navigate("TicketDetail", { id })
  }

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        {!data && <RefreshLocationFeed onPress={askForLocationHandler} />}
        {loading && <ActivityIndicator size={24} color={Colors.primary} />}
        {
          data &&
          <FlatList
            ListHeaderComponent={<RefreshLocationFeed onPress={askForLocationHandler} />}
            ListFooterComponent={<Text style={{ textAlign: 'center' }}>Displaying all {data.length} results.</Text>}
            numColumns={1}
            data={data}
            renderItem={({ item }) => <TicketCard data={item} onPress={() => handlePress(item.id)} />}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
          />
        }
        { error && <TicketFeedError error={error} /> }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default TicketFeed