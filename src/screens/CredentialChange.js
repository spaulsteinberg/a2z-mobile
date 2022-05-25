import React, { useLayoutEffect, useState } from 'react'
import CredentialFeedback from '../components/auth/CredentialFeedback'
import EmailChangeForm from '../components/auth/EmailChangeForm'
import PasswordChangeForm from '../components/auth/PasswordChangeForm'
import { AZCard, AZIconButton, AZSingleView } from '../components/ui'
import { changeUserEmail, changeUserPassword, reauthenticateWithEmailAndPassword } from '../firebase/api'

const CredentialChange = ({ route: { params: { type } }, navigation }) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            title: type === "email" ? "Change Email" : "Change Password",
            headerRight: () => <AZIconButton size={24} color="white" icon="settings-outline" outerStyle={{marginRight: 0}} />
        })
    }, [navigation, type])

    const [newEmail, setNewEmail] = useState('')
    const [confirmNewEmail, setConfirmNewEmail] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmNewPassword, setConfirmNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [submitState, setSubmitState] = useState({ loading: false, error: null, success: null })

    const handleEmailChange = async () => {
        let email = newEmail.trim();
        let confirmEmail = confirmNewEmail.trim();
        if (email.length < 6) {
            return setSubmitState({ loading: false, error: 'Email must be at least 6 non-whitespace characters long.' })
        }
        if (email !== confirmEmail) {
            return setSubmitState({ loading: false, error: 'Emails must match!' })
        }
        try {
            setSubmitState({ loading: true, error: null })
            await reauthenticateWithEmailAndPassword(confirmPassword)
            await changeUserEmail(email)
            setSubmitState({ loading: false, error: null, success: "Email updated successfully!" })
        } catch (err) {
            console.log(err)
            setSubmitState({ loading: false, error: 'An error occurred updating email.', success: null })
        }
    }

    const handlePasswordChange = async () => {
        console.log("password change click", confirmPassword, newPassword, confirmNewPassword)
        const _newPassword = newPassword;
        const _confirmNewPassword = confirmNewPassword;
        if (_newPassword.length < 6) {
            return setSubmitState({ loading: false, error: 'Passwords must be at least 6 non-whitespace characters long.' })
        }
        if (_newPassword !== _confirmNewPassword) {
            return setSubmitState({ loading: false, error: 'Passwords must match!' })
        } 
        try {
            setSubmitState({ loading: true, error: null })
            await reauthenticateWithEmailAndPassword(confirmPassword)
            await changeUserPassword(_newPassword)
            setSubmitState({ loading: false, error: null, success: "Password updated successfully!" })
        } catch (err) {
            console.log(err)
            setSubmitState({ loading: false, error: 'An error occurred updating password.', success: null })
        }
    }

    return (
        <AZSingleView>
            <AZCard>
                {
                    type === 'email' ?
                        <EmailChangeForm
                            newEmail={newEmail}
                            setNewEmail={setNewEmail}
                            confirmNewEmail={confirmNewEmail}
                            setConfirmNewEmail={setConfirmNewEmail}
                            confirmPassword={confirmPassword}
                            setConfirmPassword={setConfirmPassword}
                        />
                        :
                        <PasswordChangeForm 
                            currentPassword={confirmPassword}
                            newPassword={newPassword} 
                            confirmNewPassword={confirmNewPassword} 
                            setNewPassword={setNewPassword} 
                            setConfirmNewPassword={setConfirmNewPassword} 
                            setCurrentPassword={setConfirmPassword}
                        />
                }
                <CredentialFeedback
                    loading={submitState.loading}
                    success={submitState.success}
                    error={submitState.error}
                    onPress={type === 'email' ? handleEmailChange : handlePasswordChange}
                    btnText={type === 'email' ? "Change Email" : "Change Password"}
                />
            </AZCard>
        </AZSingleView>
    )
}

export default CredentialChange