import React from 'react'
import { View, StyleSheet } from 'react-native'
import Colors from '../../styles/Colors'
import { AZButton } from '../ui'

const ProfileEditableButton = ({ isEditing, onPrimaryPress, onSecondaryPress }) => {
  let button = <AZButton title="Edit" onPress={onPrimaryPress} rippleColor="#fff" innerStyle={styles.inner} />
  if (isEditing) {
    button = (
      <View style={styles.btnContainer}>
        <AZButton title="Save Changes" onPress={onPrimaryPress} rippleColor="#fff" outerStyle={styles.btnRow} />
        <AZButton title="Cancel" onPress={onSecondaryPress} rippleColor="#fff" outerStyle={styles.btnRow} innerStyle={styles.innerSecondary} />
      </View>
    )
  }

  return (
    <View style={styles.buttonContainer}>
      { button }
    </View>
  )
}

const styles = StyleSheet.create({
  inner: {
    backgroundColor: Colors.warning
  },
  innerSecondary: {
    backgroundColor: Colors.neutral
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  btnRow: {
    width: '48%'
  }
})

export default ProfileEditableButton