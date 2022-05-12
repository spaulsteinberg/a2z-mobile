import React from 'react'
import { View, Pressable, Text, StyleSheet, Platform } from 'react-native'
import Colors from '../../styles/Colors'
import { Ionicons } from '@expo/vector-icons';
import globalStyles from '../../styles/global'

const SettingTab = ({text, onPress}) => {
  return (
    <View style={[styles.tab, globalStyles.iosShadow]}>
        <Pressable 
            android_ripple={{color: Colors.primary }} 
            style={({pressed}) => [styles.inner, pressed && styles.pressed]}
            onPress={onPress}>
            <View style={styles.inline}>
                <Text>{text}</Text>
                {
                    Platform.OS === "ios" ? <Ionicons name="ios-arrow-forward" size={18} color="black" /> : <Ionicons name="arrow-forward" size={18} color="black" />
                }
            </View>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    tab: {
        backgroundColor: "#fff",
        elevation: 4,
        borderWidth: 1,
        borderColor: Colors.primary,
        borderRadius: 5,
        marginVertical: 12
    },
    inner: {
        paddingHorizontal: 12,
        paddingVertical: 20
    },
    pressed: {
        opacity: .7
    },
    inline: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

export default SettingTab