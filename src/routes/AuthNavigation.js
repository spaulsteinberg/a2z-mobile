import React from 'react';
import { AZIconButton } from '../components/ui';
import { TicketScreen, Settings, CredentialChange, ProfileScreen, TicketDetailScreen, HistoryScreen, MapTicketScreen } from '../screens';
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesome, Ionicons, FontAwesome5 } from '@expo/vector-icons';
import Colors from '../styles/Colors';
import getNavHeaderOptions from '../shared/functions/getNavHeaderStyles';

const Tab = createBottomTabNavigator()

const topOptions = getNavHeaderOptions()

const BottomNav = () => (
  <Tab.Navigator screenOptions={{
    ...topOptions,
    headerStyle: { backgroundColor: Colors.primary },
    headerTintColor: '#fff',
    tabBarActiveTintColor: Colors.primary,
    headerRight: () => <RightHeaderSettings />
  }}>
    <Tab.Screen name="TicketScreen" component={TicketScreen} options={{
      title: 'Tickets',
      tabBarIcon: ({ color, size }) => (
        <FontAwesome name="ticket" size={24} color={color} />
      )
    }} />
    <Tab.Screen name="HistoryScreen" component={HistoryScreen} options={{
      title: 'History',
      tabBarIcon: ({ color, size }) => (
        <FontAwesome5 name="history" size={24} color={color} />
      )
    }} />
    <Tab.Screen name="ProfileScreen" component={ProfileScreen} options={{
      title: 'Profile',
      tabBarIcon: ({ color, size }) => (
        <Ionicons name="md-person-sharp" size={24} color={color} />
      )
    }} />
  </Tab.Navigator>
)

const AuthNavigation = ({ Stack }) => {
  return (
    <Stack.Navigator screenOptions={{ ...topOptions, headerRight: () => <RightHeaderSettings /> }}>
      <Stack.Screen name="BottonNav" component={BottomNav} options={{headerShown: false}} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="CredentialChange" component={CredentialChange} options={{ title: 'Update Credentials' }} />
      <Stack.Screen name="TicketDetail" component={TicketDetailScreen} options={{title: "Ticket Details"}} />
      <Stack.Screen name="MapTicket" component={MapTicketScreen} options={{title: "Map Ticket"}} />
    </Stack.Navigator>
  )
}

const RightHeaderSettings = () => {
  const navigation = useNavigation()
  return <AZIconButton size={24} color="white" icon="settings-outline" outerStyle={{marginRight: 15}} onPress={() => navigation.navigate("Settings")} />
}

export default AuthNavigation