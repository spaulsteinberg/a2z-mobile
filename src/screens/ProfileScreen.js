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
import { getUserToken } from '../firebase/api';
import getProfile from '../store/redux/effects/profileEffects';

const ProfileScreen = () => {

  const [editing, setEditing] = useState(false)
  const focused = useIsFocused()
  const dispatch = useDispatch()
  const loading = useSelector(state => state.profile.loading)
  const error = useSelector(state => state.profile.error)

  useEffect(() => {
    if (!focused) {
      formik.resetForm()
      setEditing(false)
    }
  }, [focused])

  useEffect(() => {
    const fetchProfile = async () => dispatch(getProfile(await getUserToken()))

    fetchProfile()
  }, [])

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      zip: ''
    },
    validationSchema: Yup.object().shape({
      firstName: Yup.string().trim().required("First name cannot be left blank."),
      lastName: Yup.string().trim().required("Last name cannot be left blank."),
      email: Yup.string().email("Please enter a valid email.").required("Email cannot be left blank."),
      phone: Yup.string().required("Phone number cannot be left blank.")
        .test("phone", "Phone number is not valid.", value => /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(value)),
      zip: Yup.number().required("Zip code cannot be left blank.")
    }),
    onSubmit: values => {
      console.log(values)
    }
  })

  const handleSecondaryPress = () => {
    setEditing(false)
    formik.resetForm()
  }

  let content;
  if (loading) content = <ActivityIndicator style={styles.activity} color={Colors.secondary} size="large" />
  else if (error) {
    content = <Text style={[styles.error, styles.activity]}>An error occurred loading your profile. Please reload the page or try again later.</Text>
  }
  else {
    content = (
      <>
        <ProfilePicture />
        <ProfileForm formik={formik} isEditable={editing} />
        <ProfileEditableButton
          isEditing={editing}
          onPrimaryPress={editing ? formik.handleSubmit : () => setEditing(true)}
          onSecondaryPress={handleSecondaryPress} />
      </>
    )
  }

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={[styles.container, globalStyles.screenContainer]}>
        { content }
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
    marginVertical: 100
  },
  error: {
    textAlign: 'center',
    color: Colors.error
  }
})

export default ProfileScreen