import React from 'react'
import { ScrollView } from 'react-native'
import Colors from '../../styles/Colors'
import AZButton from '../ui/AZButton'
import AZCard from '../ui/AZCard'
import AZDivider from '../ui/AZDivider'
import AZInput from '../ui/AZInput'
import AZSingleView from '../ui/AZSingleView'

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

    const handleLoginPress = () => {
        console.log("login press")
    }

    const handleRedirectToSignupPress = () => navigation.navigate("Signup")

    return (
        <ScrollView>
            <AZSingleView>
                <AZCard>
                    <AZInput label="Email Address" />
                    <AZInput label="Password" />
                    <AZButton title="Login" outerStyle={outerBtnStyle} onPress={handleLoginPress} />
                    <AZDivider style={dividerStyle}>or</AZDivider>
                    <AZButton
                        title="Sign Up"
                        outerStyle={signupBtn.outerStyle}
                        innerStyle={signupBtn.innerStyle}
                        textStyle={signupBtn.textStyle}
                        rippleColor={Colors.secondary}
                        onPress={handleRedirectToSignupPress}
                    />
                </AZCard>
            </AZSingleView>
        </ScrollView>
    )
}

export default LoginScreen