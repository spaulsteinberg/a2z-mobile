import React from 'react'
import { AZInput, AZFeedback } from '../ui'

const ProfileEmailInput = ({ formik, isEditable }) => {
    return (
        <>
            <AZInput
                label="Email"
                value={formik.values.email}
                onBlur={formik.handleBlur('email')}
                onChangeText={formik.handleChange('email')}
                invalid={formik.errors.email && formik.touched.email}
                keyboardType="email-address"
                textStyle={{backgroundColor: "#fff"}}
                disabled={!isEditable}
            />
            {formik.errors.email && formik.touched.email && <AZFeedback message={formik.errors.email} severity="error" />}

        </>
    )
}

export default ProfileEmailInput