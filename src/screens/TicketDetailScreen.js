import React, { useEffect, useLayoutEffect, useState } from 'react'
import { ActivityIndicator, Alert, ScrollView, StyleSheet, View } from 'react-native'
import { AZButton, AZIconButton } from '../components/ui'
import globalStyles from '../styles/global'
import Colors from '../styles/Colors'
import TicketDetailTopCard from '../components/tickets/TicketDetailTopCard'
import TicketDetailBottomCard from '../components/tickets/TicketDetailBottomCard'
import { getTicketById, getUserToken, getUserApplicationStatus, postUserTicketInquiry } from '../firebase/api'
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
        const token = await getUserToken()
        const { data } = await getTicketById(token, route.params.id)
        const res = await getUserApplicationStatus(token, route.params.id)
        console.log(res.data)
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
      setTicketData(details.tickets[route.params.id].ticket.tickets)
      setProfileData(details.tickets[route.params.id].profile.data)
    } else {
      console.log("not in details")
      fetchTicket()
    }
  }, [])

  const postUserInquiry = async () => {
    try {
      const token = await getUserToken()
      const res = await postUserTicketInquiry(token, route.params.id)
      console.log(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  const handleOpenAlert = () => {
    Alert.alert("Apply for this ticket?", "By applying, we will send your profile to the poster of the ticket.", [
      { text: 'Cancel', style: 'cancel', onPress: () => console.log("cancel") },
      { text: 'Apply!', style: 'default', onPress: postUserInquiry }
    ])
  }

  let content;
  if (loadingTicket) content = <ActivityIndicator size={24} color={Colors.primary} />
  else if (ticketData) {
    content = (
      <>
        <AZButton title="Apply!" onPress={handleOpenAlert} textStyle={styles.btnTextStyle} innerStyle={styles.btnInnerStyle} outerStyle={styles.btnOuterStyle} />
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
    minHeight: 250
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
  },
  btnOuterStyle: {
    marginBottom: 12
  },
  btnTextStyle: {
  },
  btnInnerStyle: {
    paddingHorizontal: 24
  }
})

export default TicketDetailScreen