import React, { useLayoutEffect } from 'react'
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import MapView, { Callout, Marker } from 'react-native-maps'
import TicketMapCallout from '../components/tickets/TicketMapCallout'
import Colors from '../styles/Colors'

const MapTicketScreen = ({ route, navigation }) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: null
        })
    }, [navigation])

    const { width, height } = useWindowDimensions()
    const { addresses, coordinates } = route.params
    const initialRegion = {
        latitude: coordinates.start.lat,
        longitude: coordinates.start.lng,
        latitudeDelta: 0.8,
        longitudeDelta: 0.8,
    }

    return (
        <View style={styles.container}>
            <MapView style={{ width, height }} initialRegion={initialRegion}>
                <Marker title="A" coordinate={{ latitude: coordinates.start.lat, longitude: coordinates.start.lng }} pinColor={Colors.secondary}>
                    <Callout>
                        <TicketMapCallout title="A" address={addresses.start} markerColor={Colors.secondary} />
                    </Callout>
                </Marker>
                <Marker title="Z" coordinate={{ latitude: coordinates.end.lat, longitude: coordinates.end.lng }} pinColor={Colors.primary}>
                    <Callout>
                        <TicketMapCallout title="Z" address={addresses.end} markerColor={Colors.primary} />
                    </Callout>
                </Marker>
            </MapView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default MapTicketScreen