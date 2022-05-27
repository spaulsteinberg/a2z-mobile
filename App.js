import { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import AuthContextProvider, { AuthContext } from './src/store/context/AuthContext';
import Colors from './src/styles/Colors';
import { AuthNavigation, NoAuthNavigation } from './src/routes';
import ErrorBoundary from './src/screens/ErrorBoundary';
import store from './src/store/redux/store';
import { Provider } from 'react-redux'
import { LocationProvider } from './src/store/context/LocationContext';

const Stack = createNativeStackNavigator()

const Navigation = () => {
  const { user } = useContext(AuthContext)
  return user ? <AuthNavigation Stack={Stack} /> : <NoAuthNavigation Stack={Stack} />
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <SafeAreaView style={styles.container}>
        <ErrorBoundary>
          <AuthContextProvider>
            <Provider store={store}>
              <LocationProvider>
                <NavigationContainer>
                  <Navigation />
                </NavigationContainer>
              </LocationProvider>
            </Provider>
          </AuthContextProvider>
        </ErrorBoundary>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
