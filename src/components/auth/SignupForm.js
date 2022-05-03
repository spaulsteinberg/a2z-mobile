import { useFormik } from 'formik';
import React, { useEffect, useRef } from 'react'
import Colors from '../../styles/Colors';
import { AZInput, AZButton } from '../ui';
import * as Yup from 'yup'

const signupBtn = { outerStyle: { marginVertical: 8, }, innerStyle: { backgroundColor: Colors.secondary, } }

const SignupForm = ({ }) => {

    const fnameRef = useRef();

    const formik = useFormik({
        initialValues: {email: ''},
        validationSchema: Yup.object().shape({
            email: Yup.string().email("Please enter a valid email").required("Email is required")
        }),
        onSubmit: values => {
            console.log(values)
        }
    })

    useEffect(() => {
        fnameRef?.current?.focus();
    }, [])

    return (
        <React.Fragment>
            <AZInput ref={fnameRef} label="First Name" />
            <AZInput label="Last Name" />
            <AZInput 
                label="Email Address" 
                value={formik.values.email} 
                onBlur={formik.handleBlur('email')}
                onChangeText={formik.handleChange('email')} />
            <AZInput label="Password" secureTextEntry />
            <AZInput label="Confirm Password" secureTextEntry />
            <AZButton title="Sign Up" outerStyle={signupBtn.outerStyle} innerStyle={signupBtn.innerStyle} />
        </React.Fragment>
    )
}

export default SignupForm