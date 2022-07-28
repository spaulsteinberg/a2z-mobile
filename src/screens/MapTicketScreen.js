import React, { useEffect, useLayoutEffect, useState } from 'react'
import { ActivityIndicator, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import MapView, { Callout, Marker, Polyline } from 'react-native-maps'
import TicketMapCallout from '../components/tickets/TicketMapCallout'
import { getUserToken } from '../firebase/api'
import getDirections from '../maps/api/getDirections'
import Colors from '../styles/Colors'

const MapTicketScreen = ({ route, navigation }) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: null
        })
    }, [navigation])

    const { width, height } = useWindowDimensions()
    const [ loadingDirections, setLoadingDirections ] = useState(false)
    const [ directions, setDirections] = useState([])
    const { addresses, coordinates, places, ticketId } = route.params
    const initialRegion = {
        latitude: coordinates.start.lat,
        longitude: coordinates.start.lng,
        latitudeDelta: 0.8,
        longitudeDelta: 0.8,
    }

    useEffect(() => {
        const fetchDirections = async () => {
            setLoadingDirections(true)
            const token = await getUserToken()
            const { data } = await getDirections(token, ticketId, places.start, places.end).catch(err => { console.log(err); setLoadingDirections(false) })
            setDirections(data.coordinates)
            setLoadingDirections(false)
        }
        fetchDirections()
    }, [ticketId])


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
                <Polyline coordinates={directions} strokeColor="#ff00a0" strokeWidth={4} />
            </MapView>
            {
                loadingDirections ? (
                    <View style={styles.loadingBox}>
                        <ActivityIndicator size="large" color={Colors.primary} />
                        <Text style={styles.loadingBoxText}>Loading Route</Text>
                    </View>
                ) : null
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    loadingBox: {
        position: 'absolute',
        bottom: 50,
        backgroundColor: 'white',
        paddingVertical: 12,
        paddingHorizontal: 24
    },
    loadingBoxText: {
        fontSize: 18,
    }
})

export default MapTicketScreen