import { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import LoginScreen from './src/components/screens/LoginScreen';
import SignupScreen from './src/components/screens/SignupScreen';
import StreamScreen from './src/components/screens/StreamScreen';
import AuthContextProvider, { AuthContext } from './src/store/context/AuthContext';
import Colors from './src/styles/Colors';

const Stack = createNativeStackNavigator()

const NoAuthNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: { backgroundColor: Colors.primary },
      headerTintColor: 'white',
      headerTitleAlign: 'center'
    }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  )
}

const AuthNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="StreamScreen" component={StreamScreen} />
    </Stack.Navigator>
  )
}

const Navigation = () => {
  const { user } = useContext(AuthContext)
  return user ? <AuthNavigation /> : <NoAuthNavigation />
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <SafeAreaView style={styles.container}>
        <AuthContextProvider>
          <NavigationContainer>
            <Navigation />
          </NavigationContainer>
        </AuthContextProvider>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
