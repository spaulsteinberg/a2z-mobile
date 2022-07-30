import React, { useState } from 'react'
import { View, StyleSheet, Alert, Image, Pressable, ActivityIndicator } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { requestMediaLibraryPermissionsAsync, launchImageLibraryAsync, launchCameraAsync, MediaTypeOptions, useCameraPermissions, PermissionStatus } from 'expo-image-picker'
import uploadProfilePhoto from '../../firebase/api/account/uploadProfilePhoto';
import { getUserToken } from '../../firebase/api';
import { useDispatch } from 'react-redux';
import { setProfilePhoto } from '../../store/redux/slices/profileSlice';
import Colors from '../../styles/Colors';

const CAMERA = "CAMERA";
const MEDIA = "MEDIA"

const ProfilePicture = ({ photo, isEditable }) => {
    const dispatch = useDispatch()
    const [newImageLoading, setNewImageLoading] = useState(false)
    const [cameraPermissionInformation, requestPermission] = useCameraPermissions()

    const getUserSourceType = () => {
        return new Promise((resolve, _) => {
            Alert.alert("Upload New Image", "Please choose a source", [
                {
                    text: 'Camera', onPress: () => resolve(CAMERA)
                },
                {
                    text: 'My Files', onPress: () => resolve(MEDIA)
                },
            ])
        })
    }

    const verifyCameraPermission = async () => {
        if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED || cameraPermissionInformation.status === PermissionStatus.DENIED) {
            const response = await requestPermission()
            return response.granted
        } 
        return true
    }

    const promptUserForPermission = async () => {
        let permission = await requestMediaLibraryPermissionsAsync()
        return permission.granted
    }

    const openImagePicker = async () => {
        if (!isEditable) return;

        const userSourceType = await getUserSourceType()
        let hasPermissions, result;
        if (userSourceType === CAMERA) {
            hasPermissions = await verifyCameraPermission();
            if (!hasPermissions) {
                return Alert.alert("Unauthorized", "You must grant app permissions to use this part of the app.")
            }
            result = await launchCameraAsync({
                allowsEditing: true,
                aspect: [4, 4],
                quality: 0.8,
            });
        } else {
            hasPermissions = await promptUserForPermission();
            if (!hasPermissions) {
                return Alert.alert("Insufficient Permissions", "You must grant this app permission to access your photos.")
            }
            result = await launchImageLibraryAsync({
                mediaTypes: MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 4],
                quality: 0.5
            })
        }

        if (!result.cancelled) {
            try {
                setNewImageLoading(true)
                let formData = new FormData()
                formData.append('imageInput', {
                    uri: result.uri,
                    type: 'image/jpeg',
                    name: new Date() + "_profile"
                })
                const res = await uploadProfilePhoto(formData, await getUserToken())
                dispatch(setProfilePhoto(res.data.data))
            } catch (err) {
                console.log(err, err.response)
                Alert.alert("An error occurred.", "We could not upload your selected photo at this time.")
            } finally {
                setNewImageLoading(false)
            }
        }
    }

    let content;
    if (newImageLoading) {
        content = <ActivityIndicator color={Colors.primary} size="large" />
    } else {
        content = (
            <>
                {
                    photo ? <Image source={{ uri: photo }} style={styles.image} />
                        : <Ionicons name="person-outline" size={150} color="purple" />
                }
            </>
        )
    }
    return (
        <View style={styles.imageOuter}>
            <Pressable style={styles.imageContainer} onPress={openImagePicker}>
                {content}
            </Pressable>
        </View>
    )
}

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
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 100
    },
    imageOuter: {
        flex: 1,
        alignItems: 'center',
        marginVertical: 24
    }
})

export default ProfilePicture