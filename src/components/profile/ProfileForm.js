import React from 'react'
import { StyleSheet, View } from 'react-native'
import { AZInput, AZFeedback } from '../ui'
import ProfileEmailInput from './ProfileEmailInput'
import ProfileNameInput from './ProfileNameInput'
import ProfilePhoneZipInput from './ProfilePhoneZipInput'

const ProfileForm = ({ formik }) => {
    return (
        <View style={styles.container}>
            <ProfileNameInput formik={formik} />
            <ProfileEmailInput formik={formik} />
            <ProfilePhoneZipInput formik={formik} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 12,
    },
})

export default ProfileForm