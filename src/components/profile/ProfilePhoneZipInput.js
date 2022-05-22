import React from 'react'
import { View, StyleSheet } from 'react-native'
import { AZInput, AZFeedback } from '../ui'

const ProfilePhoneZipInput = ({ formik, isEditable }) => {
    return (
        <View style={styles.phoneZipContainer}>
            <View style={styles.phoneContainer}>
                <AZInput
                    label="Phone"
                    value={formik.values.phone}
                    onBlur={formik.handleBlur('phone')}
                    onChangeText={formik.handleChange('phone')}
                    invalid={formik.errors.phone && formik.touched.phone}
                    keyboardType="phone-pad"
                    textStyle={styles.inputInner}
                    disabled={!isEditable}
                />
                {formik.errors.phone && formik.touched.phone && <AZFeedback message={formik.errors.phone} severity="error" />}
            </View>
            <View style={styles.zipContainer}>
                <AZInput
                    label="Zip"
                    value={formik.values.zip}
                    onBlur={formik.handleBlur('zip')}
                    onChangeText={formik.handleChange('zip')}
                    invalid={formik.errors.zip && formik.touched.zip}
                    keyboardType="number-pad"
                    textStyle={styles.inputInner}
                    disabled={!isEditable}
                />
                {formik.errors.zip && formik.touched.zip && <AZFeedback message={formik.errors.zip} severity="error" />}
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