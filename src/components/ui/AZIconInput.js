import React, { useState } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import Colors from '../../styles/Colors'
import { AZIconButton } from '../ui'

const AZIconInput = React.forwardRef(({ style, justify = "end", secureTextEntry = false, ...rest}, ref) => {
  const [isSecure, setIsSecure] = useState(secureTextEntry)

  let iconView = (
    <View style={styles.iconContainer}>
      <AZIconButton icon={isSecure ? "eye-outline" : "eye-off-outline"} size={24} color={Colors.primary} onPress={() => setIsSecure(p => !p)} />
    </View>
  )

  const handleBlur = () => {
    if (secureTextEntry) {
      setIsSecure(true)
    }
  }

  return (
    <View style={[styles.container, style]}>
      { justify === 'start' && iconView }
      <TextInput style={styles.input} {...rest} secureTextEntry={isSecure} onBlur={handleBlur} />
      { justify === 'end' && iconView }
    </View>
  )
})

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    flexDirection: 'row',
    borderColor: Colors.primary,
    borderRadius: 8,
    alignItems: 'center'
  },
  input: {
    flex: 1,
    padding: 8,
  },
  iconContainer: {
    paddingHorizontal: 8
  }
})

export default AZIconInput