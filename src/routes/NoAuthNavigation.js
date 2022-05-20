import React from 'react';
import { ForgotPasswordScreen, LoginScreen, SignupScreen } from '../screens';
import getNavHeaderOptions from '../shared/functions/getNavHeaderStyles';

const topOptions = getNavHeaderOptions()

const NoAuthNavigation = ({ Stack }) => {
    return (
        <Stack.Navigator screenOptions={topOptions}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} options={{ title: 'Sign Up' }} />
            <Stack.Screen name="Forgot Password" component={ForgotPasswordScreen} />
        </Stack.Navigator>
    )
}

export default NoAuthNavigation