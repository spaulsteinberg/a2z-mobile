import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { View, Pressable, StyleSheet } from 'react-native'
import Colors from '../../styles/Colors'

const AZIconButton = ({ icon, size, color, onPress }) => {
  return (
    <View style={styles.outerContainer}>
        <Pressable 
          android_ripple={{color: "#fff" }} 
          style={({pressed}) => [styles.innerContainer, pressed && styles.pressed]}
          onPress={onPress}
          >
          <Ionicons name={icon} size={size} color={color} />
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    outerContainer: {
      margin: 8
    },
    innerContainer: {
      paddingHorizontal: 10,
      paddingVertical: 6
    },
    pressed: {
      opacity: 0.7
    }
})

export default AZIconButton