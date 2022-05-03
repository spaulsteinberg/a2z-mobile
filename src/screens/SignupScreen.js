import React, { useEffect, useRef } from 'react'
import { StyleSheet, ScrollView, Text } from 'react-native'
import Colors from '../styles/Colors'
import { AZCard, AZSingleView } from '../components/ui'
import SignupForm from '../components/auth/SignupForm'

const SignupScreen = ({ route, navigation }) => {

  const fnameRef = useRef();

  useEffect(() => {
    fnameRef?.current?.focus();
  }, [])

  return (
    <ScrollView>
      <AZSingleView>
        <AZCard>
          <Text style={styles.login}>
            Already have an account?{" "}
            <Text style={styles.link} onPress={() => navigation.navigate("Login")}>Log in here</Text>
          </Text>
          <SignupForm />
        </AZCard>
      </AZSingleView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  login: {
    textAlign: 'center',
    paddingTop: 10
  },
  link: {
    textDecorationLine: 'underline',
    textDecorationColor: Colors.primary,
    color: Colors.primary
  }
})

export default SignupScreen