import React from 'react'
import { Text, View, ScrollView, StyleSheet, useWindowDimensions } from 'react-native'
import Colors from '../../styles/Colors'
import globalStyles from '../../styles/global'
import AZButton from '../ui/AZButton'
import AZCard from '../ui/AZCard'
import AZDivider from '../ui/AZDivider'
import AZInput from '../ui/AZInput'

const LoginScreen = ({ route, navigation }) => {

    const { width } = useWindowDimensions()

    const topMargin = width > 380 ? 24 : 48

    let marginStyle = {
        marginTop: topMargin
    }

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

    const handleLoginPress = () => {
        console.log("login press")
    }

    const handleRedirectToSignupPress = () => navigation.navigate("Signup")

    return (
        <ScrollView>
            <View style={[styles.screen, marginStyle, globalStyles.screenContainer]}>
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
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    }
})

export default LoginScreen