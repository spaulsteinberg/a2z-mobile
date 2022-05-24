import React from 'react'
import { View, StyleSheet } from 'react-native'
import { AZInput, AZFeedback } from '../ui'

const ProfilePhoneZipInput = ({ formik, isEditable }) => {
    return (
        <View style={styles.phoneZipContainer}>
            <View style={styles.phoneContainer}>
                <AZInput
                    label="Phone"
                    value={formik.values.phoneNumber}
                    onBlur={formik.handleBlur('phoneNumber')}
                    onChangeText={formik.handleChange('phoneNumber')}
                    invalid={formik.errors.phoneNumber && formik.touched.phoneNumber}
                    keyboardType="phone-pad"
                    textStyle={styles.inputInner}
                    disabled={!isEditable}
                />
                {formik.errors.phoneNumber && formik.touched.phoneNumber && <AZFeedback message={formik.errors.phoneNumber} severity="error" />}
            </View>
            <View style={styles.zipContainer}>
                <AZInput
                    label="Zip"
                    value={formik.values.zipCode}
                    onBlur={formik.handleBlur('zipCode')}
                    onChangeText={formik.handleChange('zipCode')}
                    invalid={formik.errors.zipCode && formik.touched.zipCode}
                    keyboardType="number-pad"
                    textStyle={styles.inputInner}
                    disabled={!isEditable}
                />
                {formik.errors.zipCode && formik.touched.zipCode && <AZFeedback message={formik.errors.zipCode} severity="error" />}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inputInner: {
        backgroundColor: "#fff"
    },
    phoneZipContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    phoneContainer: {
        width: '65%'
    },
    zipContainer: {
        width: '30%'
    }
})

export default ProfilePhoneZipInput