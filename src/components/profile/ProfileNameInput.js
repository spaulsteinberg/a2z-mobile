import React from 'react'
import { View, StyleSheet } from 'react-native'
import { AZInput, AZFeedback } from '../ui'

const ProfileNameInput = ({ formik, isEditable }) => {
    return (
        <View style={styles.nameContainer}>
            <View style={styles.nameInput}>
                <AZInput
                    label="First Name"
                    value={formik.values.firstName}
                    onBlur={formik.handleBlur('firstName')}
                    onChangeText={formik.handleChange('firstName')}
                    invalid={formik.errors.firstName && formik.touched.firstName}
                    textStyle={styles.inputInner}
                    disabled={!isEditable}
                />
                {formik.errors.firstName && formik.touched.firstName && <AZFeedback message={formik.errors.firstName} severity="error" />}
            </View>
            <View style={styles.nameInput}>
                <AZInput
                    label="Last Name"
                    value={formik.values.lastName}
                    onBlur={formik.handleBlur('lastName')}
                    onChangeText={formik.handleChange('lastName')}
                    invalid={formik.errors.lastName && formik.touched.lastName}
                    textStyle={styles.inputInner}
                    disabled={!isEditable}
                />
                {formik.errors.lastName && formik.touched.lastName && <AZFeedback message={formik.errors.lastName} severity="error" />}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inputInner: {
        backgroundColor: "#fff"
    },
    nameContainer: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    nameInput: {
        width: '48%',
    }
})

export default ProfileNameInput