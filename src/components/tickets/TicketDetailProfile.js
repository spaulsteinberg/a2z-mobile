import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Colors from '../../styles/Colors'

const TicketDetailProfile = ({ postName, postCompany, postPhoto}) => {
    console.log(postName, postCompany, postPhoto)
    return (
        <View style={styles.container}>
            <View style={styles.flexEighth}>
                <Text style={styles.columnHeaderText}>Poster Info</Text>
            </View>
            <View style={styles.flexSeventEighth}>
                <View style={styles.profileText}>
                    <Text>Contact: {postName}</Text>
                    <Text>Company: {postCompany}</Text>
                </View>
                {
                    postPhoto && postPhoto !== "" ? (
                        <View style={styles.profileImageCircle}>
                            <Image source={{uri: postPhoto}} style={styles.image} />
                        </View>
                    ) : null
                } 
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center' 
    },
    columnHeaderText: {
        color: "#c0c0c0"
    },
    flexEighth: {
        flex: 1/8
    },
    flexSeventEighth: {
        flex: 7/8,
        alignItems: 'center'
    },
    profileImageCircle: {
        backgroundColor: Colors.secondary600,
        height: 125,
        width: 125,
        borderRadius: 62.5
    },
    profileText: {
        marginBottom: 24
    },
    image: {
        height: '100%',
        width: '100%',
        borderRadius: 62.5
    }
})

export default TicketDetailProfile