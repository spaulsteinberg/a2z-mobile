import React from 'react';
import { AZIconButton } from '../components/ui';
import { StreamScreen, Settings, EmailChange } from '../screens';
import { useNavigation } from '@react-navigation/native';


const AuthNavigation = ({ Stack, options }) => {
  const navigation = useNavigation()
    return (
      <Stack.Navigator screenOptions={{...options, headerRight: () => <AZIconButton size={24} color="white" icon="settings-outline" onPress={() => navigation.navigate("Settings")} />}}>
        <Stack.Screen name="StreamScreen" component={StreamScreen} options={{ title: 'Tickets' }} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="EmailChange" component={EmailChange} options={{ title: 'Change Email' }} />
      </Stack.Navigator>
    )
  }

export default AuthNavigation