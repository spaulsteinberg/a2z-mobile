import React, { useEffect, useState } from 'react'
import { View, StyleSheet, ScrollView, ActivityIndicator, Alert } from 'react-native'
import globalStyles from '../styles/global';
import Colors from '../styles/Colors';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useIsFocused } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux'
import { getUserToken, updateAccount } from '../firebase/api';
import getProfile from '../store/redux/effects/profileEffects';
import { updateProfile } from '../store/redux/slices/profileSlice';
import ProfileContent from '../components/profile/ProfileContent';
import ProfileError from '../components/profile/ProfileError';

const ProfileScreen = () => {

  const [editing, setEditing] = useState(false)
  const focused = useIsFocused()
  const dispatch = useDispatch()
  const loading = useSelector(state => state.profile.loading)
  const error = useSelector(state => state.profile.error)
  const data = useSelector(state => state.profile.data)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    if (!focused) {
      formik.resetForm()
      setSubmitting(false)
      setEditing(false)
    }
  }, [focused])

  useEffect(() => {
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
      setSubmitting(true)
      try {
        await updateAccount(values, await getUserToken())
        dispatch(updateProfile(values))
        return Alert.alert("Profile saved!", "Your profile has been updated.", [{ text: "OK", onPress: () => setEditing(false) } ])
      } catch (err) {
        console.log(err)
        return Alert.alert("An error occurred.", "An error occurred updating your profile. Please try again.")
      } finally {
        setSubmitting(false)
      }
    }
  })

  const handleSecondaryPress = () => {
    setEditing(false)
    setSubmitting(false)
    formik.resetForm()
  }

  const handleEditPress = () => setEditing(true)

  let content;
  if (loading) content = <ActivityIndicator style={styles.activity} color={Colors.secondary} size="large" />
  else if (error) content = <ProfileError handleReloadProfile={async () => dispatch(getProfile(await getUserToken()))} />
  else if (data) content = <ProfileContent formik={formik} photo={data?.photoUrl} editing={editing} loading={submitting} handleEditPress={handleEditPress} handleSecondaryPress={handleSecondaryPress} />

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={[styles.container, globalStyles.screenContainer]}>
        {content}
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
})

export default ProfileScreen