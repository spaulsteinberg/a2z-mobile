import React, { useState } from 'react'
import { StyleSheet, ActivityIndicator } from 'react-native'
import { AZButton, AZCard, AZFeedback, AZInput, AZSingleView } from '../components/ui'
import { sendUserResetEmail } from '../firebase/api'
import Colors from '../styles/Colors'

const ForgotPasswordScreen = () => {
    const [email, setEmail] = useState('')
    const [submitState, setSubmitState] = useState({ loading: false, error: null, success: null })

    const handleSendResetEmail = async () => {
        if (!email) {
            return setSubmitState({ ...submitState, error: 'Email cannot be blank.' })
        }
        try {
            setSubmitState({ loading: true, success: null, error: null })
            await sendUserResetEmail(email)
            setSubmitState({ loading: false, success: 'Email sent! Please check your email for reset instructions.', error: null })
        } catch (err) {
            console.log(err)
            setSubmitState({ loading: false, success: null, error: 'Could not send email. Please check for validity.' })
        }
    }

    return (
        <AZSingleView>
            <AZCard style={styles.card}>
                <AZInput
                    placeholder="Please enter your email."
                    autoCapitalize='none'
                    autoComplete='off'
                    autoCorrect={false}
                    value={email}
                    onChangeText={setEmail}
                    style={styles.input}
                />
                {submitState.error && <AZFeedback message={submitState.error} severity="error" style={styles.feedback} />}
                {submitState.success && <AZFeedback message={submitState.success} severity="success" style={styles.feedback} />}
                {
                    submitState.loading ? <ActivityIndicator style={styles.loading} size="large" color={Colors.primary} /> 
                    : <AZButton
                        title="Send Reset Email"
                        onPress={handleSendResetEmail}
                        rippleColor="#fff"
                        outerStyle={styles.btnOuter}
                        innerStyle={styles.btnInner}
                />}
            </AZCard>
        </AZSingleView>
    )
}

const styles = StyleSheet.create({
    card: {
        paddingTop: 0,
        paddingBottom: 0,
    },
    input: {
        marginVertical: 12
    },
    feedback: {
        textAlign: 'center',
        alignItems: 'center',
        marginBottom: 8
    },
    btnOuter: {
        marginBottom: 12
    },
    btnInner: {
        backgroundColor: Colors.primary
    },
    loading: {
        marginBottom: 12
    }
})

export default ForgotPasswordScreen