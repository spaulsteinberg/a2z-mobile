import React from 'react'
import { StyleSheet } from 'react-native'
import { AZIconInput, AZInput } from '../ui'

const EmailChangeForm = ({ newEmail, confirmNewEmail, confirmPassword, setNewEmail, setConfirmNewEmail, setConfirmPassword}) => {
    return (
        <>
            <AZInput 
                value={newEmail}
                onChangeText={setNewEmail} 
                placeholder="Enter your new email"
                autoCapitalize='none'
                style={styles.input} 
            />
            <AZInput 
                value={confirmNewEmail}
                onChangeText={setConfirmNewEmail} 
                placeholder="Confirm your new email" 
                autoCapitalize='none'
                style={styles.input} 
            />
            <AZIconInput
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                placeholder="Re-enter Password"
                autoCapitalize='none'
                autoComplete='off'
                autoCorrect={false}
                secureTextEntry
                style={styles.input}
            />
        </>
    )
}

const styles = StyleSheet.create({
    input: {
        marginVertical: 12
    }
})

export default EmailChangeForm