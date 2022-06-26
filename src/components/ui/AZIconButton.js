import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { View, Pressable, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

const AZIconButton = ({ icon, size, color, onPress, outerStyle, innerStyle }) => {
  return (
    <View style={[styles.outerContainer, outerStyle]}>
        <Pressable 
          android_ripple={{color: "#fff" }} 
          style={({pressed}) => [styles.innerContainer, innerStyle, pressed && styles.pressed]}
          onPress={onPress}
          >
          <Ionicons name={icon} size={size} color={color} />
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    outerContainer: {},
    innerContainer: {
      paddingVertical: 6,
    },
    pressed: {
      opacity: 0.7
    }
})

AZIconButton.propTypes = {
  icon: PropTypes.node,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
  onPress: PropTypes.func,
  outerStyle: PropTypes.any,
  innerStyle: PropTypes.any
}

export default AZIconButton