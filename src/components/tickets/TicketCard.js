import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import Colors from '../../styles/Colors'
import globalStyles from '../../styles/global'
import { Ionicons, Feather, Foundation } from '@expo/vector-icons';

const TicketCard = ({ onPress, outerStyle, innerStyle }) => {
    return (
        <View style={[styles.container, globalStyles.iosShadow, outerStyle]}>
            <Pressable onPress={onPress} android_ripple={{ color: "#fff" }} style={({ pressed }) => [styles.innerContainer, innerStyle, pressed && styles.pressed]}>
                <View style={styles.infoRow}>
                    <View style={styles.infoRowPicture}>
                        <Ionicons style={styles.image} name="person-outline" size={50} color={Colors.secondary} />
                    </View>
                    <View style={styles.info}>
                        <View>
                            <Text>Samuel Steinberg</Text>
                            <Text>Steinberg and Sons.</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.moreInfo}>
                    <View style={styles.moreInfoTack}>
                        <Text>190.23 mi</Text>
                        <Feather name="truck" size={24} color={Colors.secondary} />
                    </View>
                    <View style={styles.moreInfoTack}>
                        <Text>3hr 4min</Text>
                        <Ionicons name="hourglass-outline" size={24} color={Colors.secondary} />
                    </View>
                    <View style={styles.moreInfoTack}>
                        <Text>.45/mi</Text>
                        <Foundation name="dollar-bill" size={24} color={Colors.secondary} />
                    </View>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 12,
        backgroundColor: Colors.primary900,
        elevation: 4,
        height: 150,
        width: '100%',
        borderRadius: 8,
        padding: 8
    },
    innerContainer: {
        height: '100%',
        width: '100%'
    },
    pressed: {
        opacity: 0.5,
    },
    priceView: {
        alignItems: 'center',
        marginTop: 12,
        justifyContent: 'center'
    },
    priceText: {
        fontSize: 30,
        color: "green",
        textAlign: 'center'
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: 8
    },
    image: {
        height: '100%',
        width: '100%',
        marginLeft: 24,
        marginTop: 12
    },
    infoRowPicture: {
        backgroundColor: '#fff',
        alignItems: 'center',
        width: 75,
        height: 75,
        borderRadius: 37.5,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: Colors.secondary,
    },
    info: {
        marginLeft: 12
    },
    moreInfo: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    moreInfoTack: {
        alignItems: 'center',
        marginHorizontal: 16
    }
})

export default TicketCard