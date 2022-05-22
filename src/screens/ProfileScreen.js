import React, { useRef, useState } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import globalStyles from '../styles/global';
import Colors from '../styles/Colors';
import ProfilePicture from '../components/profile/ProfilePicture';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ProfileForm from '../components/profile/ProfileForm';
import ProfileEditableButton from '../components/profile/ProfileEditableButton';

const ProfileScreen = () => {

  const [editing, setEditing] = useState(false)
  const formikRef = useRef()

  const formik = useFormik({
    innerRef: formikRef,
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
        .test("phone", "Phone number is not valid.", value => {
          console.log(value)
          return /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(value)
        }),
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

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={[styles.container, globalStyles.screenContainer]}>
        <ProfilePicture />
        <ProfileForm formik={formik} />
        <ProfileEditableButton 
          isEditing={editing}
          onPrimaryPress={editing ? formik.handleSubmit : () => setEditing(true)} 
          onSecondaryPress={handleSecondaryPress} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
    backgroundColor: Colors.primary900
  },
})

export default ProfileScreen