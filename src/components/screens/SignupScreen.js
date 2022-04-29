import React, { useEffect, useRef } from 'react'
import { StyleSheet, ScrollView, Text } from 'react-native'
import Colors from '../../styles/Colors'
import { AZButton, AZCard, AZInput, AZSingleView } from '../ui'


const signupBtn = { outerStyle: { marginVertical: 8, }, innerStyle: { backgroundColor: Colors.secondary, } }

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
          <AZInput ref={fnameRef} label="First Name" />
          <AZInput label="Last Name" />
          <AZInput label="Email Address" />
          <AZInput label="Password" secureTextEntry/>
          <AZInput label="Confirm Password" secureTextEntry/>
          <AZButton title="Sign Up" outerStyle={signupBtn.outerStyle} innerStyle={signupBtn.innerStyle} />
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