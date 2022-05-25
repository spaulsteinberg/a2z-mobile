import React, { useEffect, useState } from 'react'
import { View, StyleSheet, ScrollView, ActivityIndicator, Text } from 'react-native'
import globalStyles from '../styles/global';
import Colors from '../styles/Colors';
import ProfilePicture from '../components/profile/ProfilePicture';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ProfileForm from '../components/profile/ProfileForm';
import ProfileEditableButton from '../components/profile/ProfileEditableButton';
import { useIsFocused } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux'
import { getUserToken, updateAccount } from '../firebase/api';
import getProfile from '../store/redux/effects/profileEffects';
import { updateProfile } from '../store/redux/slices/profileSlice';
import ProfileSubmitFeedback from '../components/profile/ProfileSubmitFeedback';
import { AZButton } from '../components/ui';

const ProfileScreen = () => {

  const [editing, setEditing] = useState(false)
  const focused = useIsFocused()
  const dispatch = useDispatch()
  const loading = useSelector(state => state.profile.loading)
  const error = useSelector(state => state.profile.error)
  const data = useSelector(state => state.profile.data)
  const [submitState, setSubmitState] = useState({loading: false, success: null, error: null })

  useEffect(() => {
    if (!focused) {
      formik.resetForm()
      setSubmitState({ loading: false, success: null, error: null })
      setEditing(false)
    }
  }, [focused])

  useEffect(() => {
    console.log(data)
    const fetchProfile = async () => dispatch(getProfile(await getUserToken()))

    if (!data) {
      fetchProfile()
    }
  }, [])

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      firstName: data ? data.firstName : '',
      lastName: data ? data.lastName : '',
      email: data ? data.email : '',
      phoneNumber: data ? data.phoneNumber : '',
      zipCode: data ? data.zipCode : ''
    },
    validationSchema: Yup.object().shape({
      firstName: Yup.string().trim().required("First name cannot be left blank."),
      lastName: Yup.string().trim().required("Last name cannot be left blank."),
      email: Yup.string().email("Please enter a valid email.").required("Email cannot be left blank."),
      phoneNumber: Yup.string().required("Phone number cannot be left blank.")
        .test("phone", "Phone number is not valid.", value => /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(value)),
      zipCode: Yup.number().required("Zip code cannot be left blank.")
    }),
    onSubmit: async (values) => {
      console.log(values)
      setSubmitState({ loading: true, success: null, error: null  })
      try {
        const token = await getUserToken()
        const res = await updateAccount(values, token)
        console.log(res, "SAVED")
        dispatch(updateProfile(values))
        return setSubmitState({ loading: false, success: "Profile saved!", error: null })
      } catch (err) {
        console.log(err)
        return setSubmitState({ loading: false, success: null, error: "Could not save profile."})
      }
    }
  })

  const handleSecondaryPress = () => {
    setEditing(false)
    setSubmitState({ loading: false, success: null, error: null })
    formik.resetForm()
  }

  let content, feedback = null;
  if (loading) content = <ActivityIndicator style={styles.activity} color={Colors.secondary} size="large" />
  else if (error) {
    content = (
      <View style={styles.errorWrapper}>
        <Text style={[styles.error, styles.activity]}>An error occurred loading your profile. Please reload the page or try again later.</Text>
        <AZButton title="Try Again" innerStyle={styles.errorBtn} onPress={async () => dispatch(getProfile(await getUserToken()))} />
      </View>
    )
    //
  }
  else if (data) {
    content = (
      <>
        <ProfilePicture />
        <ProfileForm formik={formik} isEditable={editing} />
        <ProfileEditableButton
          isEditing={editing}
          isLoading={submitState.loading}
          onPrimaryPress={editing ? formik.handleSubmit : () => setEditing(true)}
          onSecondaryPress={handleSecondaryPress} />
      </>
    )
  }

  if (submitState.success) feedback = <ProfileSubmitFeedback message={submitState.success} severity="success" />
  else if (submitState.error) feedback = <ProfileSubmitFeedback message={submitState.error} severity="error" />

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={[styles.container, globalStyles.screenContainer]}>
        {content}
        {feedback}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
    backgroundColor: Colors.primary900
  },
  activity: {
    marginTop: 100,
    marginBottom: 25,
  },
  error: {
    textAlign: 'center',
    color: Colors.error
  },
  errorBtn: {
    backgroundColor: Colors.secondary
  },
  errorWrapper: {alignItems: 'center'}
})

export default ProfileScreen