import React from 'react'
import { StyleSheet } from 'react-native'
import { AZIconInput } from '../ui'

const PasswordChangeForm = ({ currentPassword, newPassword, confirmNewPassword, setCurrentPassword, setNewPassword, setConfirmNewPassword }) => {
    return (
        <>
            <AZIconInput
                value={currentPassword}
                onChangeText={setCurrentPassword}
                placeholder="Enter your current password"
                autoCapitalize='none'
                autoComplete='off'
                autoCorrect={false}
                secureTextEntry
                style={styles.input}
            />
            <AZIconInput
                value={newPassword}
                onChangeText={setNewPassword}
                placeholder="Enter your new password"
                autoCapitalize='none'
                autoComplete='off'
                secureTextEntry
                autoCorrect={false}
                style={styles.input}
            />
            <AZIconInput
                value={confirmNewPassword}
                onChangeText={setConfirmNewPassword}
                placeholder="Confirm your new password"
                autoCapitalize='none'
                autoComplete='off'
                secureTextEntry
                autoCorrect={false}
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

export default PasswordChangeForm