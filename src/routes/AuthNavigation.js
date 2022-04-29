import React from 'react';
import { logout } from '../firebase/api';
import { AZIconButton } from '../components/ui';
import { StreamScreen } from '../screens';

const AuthNavigation = ({ Stack, options }) => {
    return (
      <Stack.Navigator screenOptions={{...options, headerRight: () => <AZIconButton size={24} color="white" icon="settings-outline" onPress={() => logout().then(_ => {}).catch(err => console.log(err))} />}}>
        <Stack.Screen name="StreamScreen" component={StreamScreen} options={{ title: 'Tickets' }} />
      </Stack.Navigator>
    )
  }

export default AuthNavigation