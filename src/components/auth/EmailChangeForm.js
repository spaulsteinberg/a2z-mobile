import React from 'react'
import { AZInput } from '../ui'

const EmailChangeForm = ({ newEmail, confirmNewEmail, confirmPassword, setNewEmail, setConfirmNewEmail, setConfirmPassword}) => {
    return (
        <>
            <AZInput 
                value={newEmail}
                onChangeText={setNewEmail} 
                placeholder="Enter your new email"
                autoCapitalize='none'
                style={{marginVertical: 4}} 
            />
            <AZInput 
                value={confirmNewEmail}
                onChangeText={setConfirmNewEmail} 
                placeholder="Confirm your new email" 
                autoCapitalize='none'
                style={{marginVertical: 4}} 
            />
            <AZInput
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                placeholder="Re-enter Password"
                autoCapitalize='none'
                autoComplete='off'
                autoCorrect={false}
                secureTextEntry
                style={{marginVertical: 4}}
            />
        </>
    )
}

export default EmailChangeForm