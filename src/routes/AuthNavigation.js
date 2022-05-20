import React from 'react';
import { AZIconButton } from '../components/ui';
import { StreamScreen, Settings, EmailChange } from '../screens';
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import ProfileScreen from '../screens/ProfileScreen';
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
    <Tab.Screen name="TicketScreen" component={StreamScreen} options={{
      title: 'Tickets',
      tabBarIcon: ({ color, size }) => (
        <FontAwesome name="ticket" size={24} color={color} />
      )
    }} />
    <Tab.Screen name="ProfileScreen" component={ProfileScreen} options={{
      title: 'Profile',
      tabBarIcon: ({ color, size }) => (
        <Ionicons name="md-person-outline" size={24} color={color} />
      )
    }} />
  </Tab.Navigator>
)

const AuthNavigation = ({ Stack, options }) => {
  return (
    <Stack.Navigator screenOptions={{ ...topOptions, headerRight: () => <RightHeaderSettings /> }}>
      <Stack.Screen name="BottonNav" component={BottomNav} options={{headerShown: false}} />
      <Stack.Screen name="StreamScreen" component={StreamScreen} options={{ title: 'Tickets' }} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="EmailChange" component={EmailChange} options={{ title: 'Change Email' }} />
    </Stack.Navigator>
  )
}

const RightHeaderSettings = () => {
  const navigation = useNavigation()
  return <AZIconButton size={24} color="white" icon="settings-outline" onPress={() => navigation.navigate("Settings")} />
}

export default AuthNavigation