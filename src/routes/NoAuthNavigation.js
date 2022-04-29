import React from 'react';
import { LoginScreen, SignupScreen } from '../screens';

const NoAuthNavigation = ({ Stack, options }) => {
    return (
        <Stack.Navigator screenOptions={options}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
        </Stack.Navigator>
    )
}

export default NoAuthNavigation