import React from 'react'
import ProfileEditableButton from './ProfileEditableButton'
import ProfileForm from './ProfileForm'
import ProfilePicture from './ProfilePicture'

const ProfileContent = ({ formik, editing, loading, handleEditPress, handleSecondaryPress}) => {
  return (
    <>
        <ProfilePicture />
        <ProfileForm formik={formik} isEditable={editing} />
        <ProfileEditableButton
          isEditing={editing}
          isLoading={loading}
          onPrimaryPress={editing ? formik.handleSubmit : handleEditPress}
          onSecondaryPress={handleSecondaryPress} />
      </>
  )
}

export default ProfileContent