import React, { useLayoutEffect } from 'react'
import { Text, View } from 'react-native'
import { AZIconButton } from '../components/ui'

const TicketDetailScreen = ({ route, navigation }) => {

  useLayoutEffect(() => {
    navigation.setOptions({
        headerRight: () => <AZIconButton size={24} color="white" icon="settings-outline" outerStyle={{marginRight: 0}} onPress={() => navigation.navigate("Settings")} />
    })
}, [navigation])

  return (
    <View>
        <Text>Ticket detail { route.params.id} </Text>
    </View>
  )
}

export default TicketDetailScreen