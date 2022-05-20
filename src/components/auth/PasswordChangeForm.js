import React from 'react'
import { AZInput } from '../ui'

const PasswordChangeForm = ({ currentPassword, newPassword, confirmNewPassword, setCurrentPassword, setNewPassword, setConfirmNewPassword }) => {
    return (
        <>
            <AZInput
                value={currentPassword}
                onChangeText={setCurrentPassword}
                placeholder="Enter your current password"
                autoCapitalize='none'
                autoComplete='off'
                autoCorrect={false}
                secureTextEntry
                style={{ marginVertical: 12 }}
            />
            <AZInput
                value={newPassword}
                onChangeText={setNewPassword}
                placeholder="Enter your new password"
                autoCapitalize='none'
                autoComplete='off'
                secureTextEntry
                autoCorrect={false}
                style={{ marginVertical: 12 }}
            />
            <AZInput
                value={confirmNewPassword}
                onChangeText={setConfirmNewPassword}
                placeholder="Confirm your new password"
                autoCapitalize='none'
                autoComplete='off'
                secureTextEntry
                autoCorrect={false}
                style={{ marginVertical: 12 }}
            />
        </>
    )
}

export default PasswordChangeForm