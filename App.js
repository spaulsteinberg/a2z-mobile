import { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import AuthContextProvider, { AuthContext } from './src/store/context/AuthContext';
import Colors from './src/styles/Colors';
import { AuthNavigation, NoAuthNavigation } from './src/routes';
import ErrorBoundary from './src/screens/ErrorBoundary';

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
            <NavigationContainer>
              <Navigation />
            </NavigationContainer>
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
