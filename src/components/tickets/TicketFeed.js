import { useNavigation } from '@react-navigation/native'
import React, { useCallback, useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, RefreshControl, StyleSheet, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { getUserToken } from '../../firebase/api'
import getAllTickets from '../../store/redux/effects/ticketEffects'
import Colors from '../../styles/Colors'
import RefreshLocationFeed from './RefreshLocationFeed'
import TicketCard from './TicketCard'
import TicketFeedError from './TicketFeedError'
import TicketFeedHeader from './TicketFeedHeader'

const TicketFeed = ({ location, askForLocationHandler }) => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const { loading, data, error } = useSelector(state => state.tickets)
  const [feedError, setFeedError] = useState(false)
  const [tokenLoading, setTokenLoading] = useState(false)
  const [refreshing, setRefreshing] = useState(false)

  useEffect(() => {
    const hydrateFeed = async () => {
      try {
        setTokenLoading(true)
        dispatch(getAllTickets({ token: await getUserToken(), lat: location.latitude, lng: location.longitude }))
        setFeedError(false)
      } catch (err) {
        console.log(err)
        setFeedError("Something went wrong loading feed. Please try again.")
       }
      finally { setTokenLoading(false) }
    }
    if (location) hydrateFeed()
  }, [location])

  const handlePress = id => {
    navigation.navigate("TicketDetail", { id })
  }

  const onRefresh = useCallback( async () => {
    setTokenLoading(true)
    dispatch(getAllTickets({ token: await getUserToken().catch(err => console.log(err)), lat: location.latitude, lng: location.longitude }))
    setTokenLoading(false)
  })

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        { !data && <RefreshLocationFeed onPress={askForLocationHandler} /> }
        { loading || tokenLoading ? <ActivityIndicator size={24} color={Colors.primary} /> : null }
        {
          data &&
          <FlatList
            ListHeaderComponent={<TicketFeedHeader onPress={askForLocationHandler} numResults={data.length} />}
            numColumns={1}
            data={data}
            renderItem={({ item }) => <TicketCard data={item} onPress={() => handlePress(item.id)} />}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
          />
        }
        { error && <TicketFeedError error={error} /> }
        { feedError && <TicketFeedError error={feedError} /> }
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