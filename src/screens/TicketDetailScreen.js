import React, { useEffect, useLayoutEffect, useState } from 'react'
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native'
import { AZIconButton } from '../components/ui'
import globalStyles from '../styles/global'
import Colors from '../styles/Colors'
import TicketDetailTopCard from '../components/tickets/TicketDetailTopCard'
import TicketDetailBottomCard from '../components/tickets/TicketDetailBottomCard'
import { getTicketById, getUserToken } from '../firebase/api'
import TicketFeedError from '../components/tickets/TicketFeedError'
import { useDispatch, useSelector } from 'react-redux'
import { addTicketDetail } from '../store/redux/slices/ticketDetailSlice'

const TicketDetailScreen = ({ route, navigation }) => {

  const [loadingTicket, setLoadingTicket] = useState(false)
  const [ticketData, setTicketData] = useState(null)
  const [profileData, setProfileData] = useState(null)
  const [ticketError, setTicketError] = useState('')
  const dispatch = useDispatch()
  const details = useSelector(state => state.details)

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <AZIconButton size={24} color="white" icon="settings-outline" outerStyle={{ marginRight: 0 }} onPress={() => navigation.navigate("Settings")} />
    })
  }, [navigation])

  useEffect(() => {
    const fetchTicket = async () => {
      setLoadingTicket(true)
      try {
        const { data } = await getTicketById(await getUserToken(), route.params.id)
        console.log(data, route.params.id)
        dispatch(addTicketDetail({id: route.params.id, data}))
        setTicketData(data.ticket.tickets)
        setProfileData(data.profile.data)
        setTicketError('')
      } catch (err) {
        console.log(err)
        setTicketData(null)
        setProfileData(null)
        setTicketError('Could not retrieve ticket details.')
      }
      setLoadingTicket(false)
    }

    if (details.ids.includes(route.params.id)) {
      console.log("DETAILS", details)
      setTicketData(details.tickets[route.params.id].ticket.tickets)
      setProfileData(details.tickets[route.params.id].profile.data)
    } else {
      console.log("not in details")
      fetchTicket()
    }
  }, [])

  let content;
  if (loadingTicket) content = <ActivityIndicator size={24} color={Colors.primary} />
  else if (ticketData) {
    content = (
      <>
        <TicketDetailTopCard ticket={ticketData} cardStyle={styles.cardStyle} rowStyle={styles.flexRow} />
        <TicketDetailBottomCard cardStyle={styles.cardStyle} profile={profileData} />
      </>
    )
  } else if (ticketError) {
    content = <TicketFeedError error={ticketError} />
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <View style={[globalStyles.screenContainer, styles.container]}>
        { content }
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 16,
    flex: 1
  },
  cardStyle: {
    height: 250
  },
  topCard: {
    marginBottom: 24
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingVertical: 4
  },
  columnHeaderText: {
    color: "#c0c0c0"
  },
  profileImageCircle: {
    backgroundColor: Colors.secondary600,
    height: 125,
    width: 125,
    borderRadius: 62.5
  }
})

export default TicketDetailScreen