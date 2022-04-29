import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { ActivityIndicator, Alert } from 'react-native'
import { login } from '../../firebase/api'
import Colors from '../../styles/Colors'
import { AZButton, AZCard, AZDivider, AZInput, AZSingleView } from '../ui'

const dividerStyle = { paddingVertical: 10 }
const outerBtnStyle = { marginVertical: 8 }
const signupBtn = {
    outerStyle: {
        marginVertical: 8,
        borderWidth: 1,
        borderColor: Colors.secondary
    },
    innerStyle: {
        backgroundColor: 'transparent',
        elevation: 0
    },
    textStyle: {
        color: Colors.secondary
    }
}

const LoginScreen = ({ route, navigation }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [loading, setLoading] = useState(false)

    const handleLoginPress = () => {
        setLoading(true)
        login(email, password)
        .then(_ => {
          //  setLoading(false)
        })
        .catch(err => Alert.alert('Authentication failed.', 'Please check your username and password and try again', [
            { text: 'OK', onPress: () => setLoading(false) }
        ]))
    }

    const handleRedirectToSignupPress = () => navigation.navigate("Signup")

    return (
        <ScrollView>
            <AZSingleView>
                <AZCard>
                    <AZInput
                        label="Email Address"
                        autoCapitalize='none'
                        autoCorrect={false}
                        value={email}
                        onChangeText={setEmail}
                        disabled={loading}
                    />
                    <AZInput
                        label="Password"
                        autoCapitalize='none'
                        autoComplete='off'
                        autoCorrect={false} 
                        secureTextEntry 
                        value={password}
                        onChangeText={setPassword}
                        disabled={loading}
                     />
                    { loading ? <ActivityIndicator /> : <AZButton title="Login" outerStyle={outerBtnStyle} onPress={handleLoginPress} /> }
                    <AZDivider style={dividerStyle}>or</AZDivider>
                    <AZButton
                        title="Sign Up"
                        outerStyle={signupBtn.outerStyle}
                        innerStyle={signupBtn.innerStyle}
                        textStyle={signupBtn.textStyle}
                        rippleColor={Colors.secondary}
                        onPress={handleRedirectToSignupPress}
                        disabled={loading}
                    />
                </AZCard>
            </AZSingleView>
        </ScrollView>
    )
}

export default LoginScreen