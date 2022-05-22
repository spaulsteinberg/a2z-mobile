import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const ProfilePicture = () => (
    <View style={styles.imageOuter}>
        <View style={styles.imageContainer}>
            <Ionicons name="person-outline" size={150} color="purple" />
        </View>
    </View>
)

const styles = StyleSheet.create({
    imageContainer: {
        backgroundColor: '#fff',
        alignItems: 'center',
        width: 200,
        height: 200,
        borderRadius: 100,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'black'
    },
    imageOuter: {
        flex: 1,
        alignItems: 'center',
        marginVertical: 24
    }
})

export default ProfilePicture