import { useFormik } from 'formik';
import React, { useEffect, useRef, useState } from 'react'
import Colors from '../../styles/Colors';
import { AZInput, AZButton, AZFeedback } from '../ui';
import * as Yup from 'yup'
import { createAccount, getUserToken, signup } from '../../firebase/api';
import { ActivityIndicator } from 'react-native';

const signupBtn = { outerStyle: { marginVertical: 8, }, innerStyle: { backgroundColor: Colors.secondary, } }

const SignupForm = ({ }) => {

    const fnameRef = useRef();

    const [submitState, setSubmitState] = useState({ loading: false, error: null })
    const invalidPassword = 'Passwords must match!'

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: Yup.object().shape({
            firstName: Yup.string().trim().required("First name is required.").max(30, "First name cannot be more than 30 characters."),
            lastName: Yup.string().trim().required("Last name is required.").max(50, "Last name cannot be more than 50 characters."),
            email: Yup.string().email("Please enter a valid email.").required("Email is required."),
            password: Yup.string().trim().required("Password is a required field.").min(6, "Must be at least 6 characters").max(25, "Cannot be greater than 25 characters."),
            confirmPassword: Yup.string().trim().required("Confirm password is required.")
        }),
        onSubmit: async (values) => {
            setSubmitState({ loading: true, error: null })

            const { firstName, lastName, email, password, confirmPassword} = values;

            if (password !== confirmPassword) {
                return setSubmitState({ loading: false, error: invalidPassword })
            }
            
            // try requests separately, give message indicting status
            try {
                const userResponse = await signup(email, password)
                console.log("User sign up success", userResponse)
            } catch (err) {
                return setSubmitState({ loading: false, error: 'Something went wrong. Please try again.' })
            }

            // TODO - get token from signed up user
            try {
                const token = await getUserToken()
                console.log(token)
                const accountRes = await createAccount(firstName, lastName, email, '', '', token);
                console.log("ACCOUNT RES")
                return
            } catch (err) {
                return setSubmitState({ loading: false, error: 'Something went wrong. Please try again.' })
            }
        }
    })

    useEffect(() => {
        fnameRef?.current?.focus();
    }, [])

    return (
        <React.Fragment>
            <AZInput
                ref={fnameRef}
                label="First Name" 
                value={formik.values.firstName}
                onBlur={formik.handleBlur('firstName')}
                onChangeText={formik.handleChange('firstName')}
                invalid={formik.errors.firstName}
            />
            { formik.errors.firstName && <AZFeedback message={formik.errors.firstName} severity="error" /> }
            <AZInput
                label="Last Name"
                value={formik.values.lastName}
                onBlur={formik.handleBlur('lastName')}
                onChangeText={formik.handleChange('lastName')}
                invalid={formik.errors.lastName}
            />
            { formik.errors.lastName && <AZFeedback message={formik.errors.lastName} severity="error" /> }
            <AZInput
                label="Email Address"
                autoCapitalize="none"
                value={formik.values.email}
                onBlur={formik.handleBlur('email')}
                onChangeText={formik.handleChange('email')} 
                invalid={formik.errors.email}
            />
            { formik.errors.email && <AZFeedback message={formik.errors.email} severity="error" /> }
            <AZInput 
                label="Password" 
                autoCapitalize="none"
                value={formik.values.password} 
                onBlur={formik.handleBlur('password')}
                onChangeText={formik.handleChange('password')}
                invalid={formik.errors.password}
                secureTextEntry 
            />
            { formik.errors.password && <AZFeedback message={formik.errors.password} severity="error" /> }
            <AZInput 
                label="Confirm Password" 
                autoCapitalize="none"
                value={formik.values.confirmPassword} 
                onBlur={formik.handleBlur('confirmPassword')}
                onChangeText={formik.handleChange('confirmPassword')}
                invalid={formik.errors.confirmPassword}
                secureTextEntry 
            />
            { formik.errors.confirmPassword && <AZFeedback message={formik.errors.confirmPassword} severity="error" /> }
            { submitState?.error === invalidPassword && <AZFeedback message={invalidPassword} severity="error" /> }
            {
                submitState.loading ? <ActivityIndicator size="large" color={Colors.primary} /> : <AZButton title="Sign Up" onPress={formik.handleSubmit} outerStyle={signupBtn.outerStyle} innerStyle={signupBtn.innerStyle} />
            }
        </React.Fragment>
    )
}

export default SignupForm