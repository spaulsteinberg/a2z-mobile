import React, { useState } from 'react'
import { ActivityIndicator } from 'react-native-web'
import { AZButton, AZCard, AZFeedback, AZInput, AZSingleView } from '../components/ui'
import { changeUserEmail, reauthenticateWithEmailAndPassword } from '../firebase/api'

const EmailChange = () => {
    const [newEmail, setNewEmail] = useState('')
    const [confirmNewEmail, setConfirmNewEmail] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [submitState, setSubmitState] = useState({ loading: false, error: null, success: false })

    const handleEmailChange = async () => {
        let email = newEmail.trim();
        let confirmEmail = confirmNewEmail.trim();
        if (email.length < 6) {
            return setSubmitState({ loading: false, error: 'Email must be at least 6 non-whitespace characters long!' })
        }
        if (email !== confirmEmail) {
            return setSubmitState({ loading: false, error: 'Emails must match!' })
        }
        try {
            setSubmitState({ loading: true, error: null })
            await reauthenticateWithEmailAndPassword(confirmPassword)
            await changeUserEmail(email)
            setSubmitState({ loading: false, error: null, success: true })
        } catch (err) {
            console.log(err)
            setSubmitState({ loading: false, error: 'An error occurred updating email.', success: false })
        }
    }

    return (
        <AZSingleView>
            <AZCard>
                <AZInput value={newEmail} onChangeText={setNewEmail} placeholder="Enter your new email" />
                <AZInput value={confirmNewEmail} onChangeText={setConfirmNewEmail} placeholder="Confirm your new email" />
                <AZInput
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    placeholder="Re-enter Password"
                    autoCapitalize='none'
                    autoComplete='off'
                    autoCorrect={false}
                    secureTextEntry 
                />
                <AZFeedback severity="error" message={submitState.error} style={{ alignItems: 'center' }} />
                {submitState.success && <AZFeedback severity="success" message="Email updated successfully!" style={{ alignItems: 'center' }} />}
                {
                    submitState.loading ? <ActivityIndicator style={{ marginTop: 10 }} /> : <AZButton title="Submit" disabled={submitState.success} onPress={handleEmailChange} outerStyle={{ marginTop: 10 }} />
                }
            </AZCard>
        </AZSingleView>
    )
}

export default EmailChange