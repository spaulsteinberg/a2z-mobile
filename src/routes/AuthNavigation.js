import React from 'react';
import { AZIconButton } from '../components/ui';
import { StreamScreen } from '../screens';
import { useNavigation } from '@react-navigation/native';
import Settings from '../screens/Settings';


const AuthNavigation = ({ Stack, options }) => {
  const navigation = useNavigation()
    return (
      <Stack.Navigator screenOptions={{...options, headerRight: () => <AZIconButton size={24} color="white" icon="settings-outline" onPress={() => navigation.navigate("Settings")} />}}>
        <Stack.Screen name="StreamScreen" component={StreamScreen} options={{ title: 'Tickets' }} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    )
  }

export default AuthNavigation