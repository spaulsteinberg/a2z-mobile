import React, { useEffect, useLayoutEffect } from 'react'
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import MapView, { Callout, Marker, Polyline } from 'react-native-maps'
import TicketMapCallout from '../components/tickets/TicketMapCallout'
import getDirections from '../maps/api/getDirections'
import Colors from '../styles/Colors'

const MapTicketScreen = ({ route, navigation }) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: null
        })
    }, [navigation])

    const { width, height } = useWindowDimensions()
    const { addresses, coordinates, places } = route.params
    const initialRegion = {
        latitude: coordinates.start.lat,
        longitude: coordinates.start.lng,
        latitudeDelta: 0.8,
        longitudeDelta: 0.8,
    }

    useEffect(() => {
        const fetchDirections = async () => {
            const { data } = await getDirections(places.start, places.end).catch(err => console.log(err))
            console.log("RESULT", places, data)
        }
        fetchDirections() 
    }, [places])

    const obj = {
        overview_path: [
            {
                "latitude": 30.40086,
                "longitude": -97.72401
            },
            {
                "latitude": 30.40106,
                "longitude": -97.72471
            },
            {
                "latitude": 30.40208,
                "longitude": -97.72431
            },
            {
                "latitude": 30.40246,
                "longitude": -97.72417000000002
            },
            {
                "latitude": 30.403260000000003,
                "longitude": -97.72380000000001
            },
            {
                "latitude": 30.40331,
                "longitude": -97.72386
            },
            {
                "latitude": 30.403380000000002,
                "longitude": -97.72405
            },
            {
                "latitude": 30.403520000000004,
                "longitude": -97.72443000000001
            },
            {
                "latitude": 30.403650000000003,
                "longitude": -97.72468
            },
            {
                "latitude": 30.403750000000002,
                "longitude": -97.72481
            },
            {
                "latitude": 30.403890000000004,
                "longitude": -97.72489
            },
            {
                "latitude": 30.403940000000002,
                "longitude": -97.72492000000001
            },
            {
                "latitude": 30.404280000000004,
                "longitude": -97.72505000000001
            },
            {
                "latitude": 30.40435,
                "longitude": -97.72506000000001
            },
            {
                "latitude": 30.40444,
                "longitude": -97.72503
            },
            {
                "latitude": 30.404640000000004,
                "longitude": -97.72473000000001
            },
            {
                "latitude": 30.404850000000003,
                "longitude": -97.72443000000001
            },
            {
                "latitude": 30.405120000000004,
                "longitude": -97.72404
            },
            {
                "latitude": 30.40593,
                "longitude": -97.72265
            },
            {
                "latitude": 30.406480000000002,
                "longitude": -97.72157000000001
            },
            {
                "latitude": 30.406820000000003,
                "longitude": -97.72083
            },
            {
                "latitude": 30.407010000000003,
                "longitude": -97.72029
            },
            {
                "latitude": 30.407140000000002,
                "longitude": -97.71986000000001
            },
            {
                "latitude": 30.407200000000003,
                "longitude": -97.71956
            },
            {
                "latitude": 30.407320000000002,
                "longitude": -97.71891000000001
            },
            {
                "latitude": 30.407570000000003,
                "longitude": -97.71744000000001
            },
            {
                "latitude": 30.407850000000003,
                "longitude": -97.71575000000001
            },
            {
                "latitude": 30.408330000000003,
                "longitude": -97.71586
            },
            {
                "latitude": 30.408770000000004,
                "longitude": -97.71595
            },
            {
                "latitude": 30.4093,
                "longitude": -97.71610000000001
            },
            {
                "latitude": 30.409560000000003,
                "longitude": -97.71620000000001
            },
            {
                "latitude": 30.40978,
                "longitude": -97.71631000000001
            },
            {
                "latitude": 30.410010000000003,
                "longitude": -97.71651000000001
            },
            {
                "latitude": 30.410120000000003,
                "longitude": -97.71663000000001
            },
            {
                "latitude": 30.410280000000004,
                "longitude": -97.71690000000001
            },
            {
                "latitude": 30.41036,
                "longitude": -97.71711
            },
            {
                "latitude": 30.41044,
                "longitude": -97.71748000000001
            },
            {
                "latitude": 30.41044,
                "longitude": -97.71767000000001
            },
            {
                "latitude": 30.410370000000004,
                "longitude": -97.71841
            },
            {
                "latitude": 30.410330000000002,
                "longitude": -97.71903
            },
            {
                "latitude": 30.410410000000002,
                "longitude": -97.71939
            },
            {
                "latitude": 30.410510000000002,
                "longitude": -97.71964000000001
            },
            {
                "latitude": 30.410610000000002,
                "longitude": -97.71984
            },
            {
                "latitude": 30.41111,
                "longitude": -97.72069
            },
            {
                "latitude": 30.411440000000002,
                "longitude": -97.72129000000001
            },
            {
                "latitude": 30.411770000000004,
                "longitude": -97.72218000000001
            },
            {
                "latitude": 30.41185,
                "longitude": -97.72256
            },
            {
                "latitude": 30.411910000000002,
                "longitude": -97.72298
            },
            {
                "latitude": 30.41193,
                "longitude": -97.72346
            },
            {
                "latitude": 30.41184,
                "longitude": -97.72503
            },
            {
                "latitude": 30.411790000000003,
                "longitude": -97.72526
            },
            {
                "latitude": 30.41174,
                "longitude": -97.72626000000001
            },
            {
                "latitude": 30.411690000000004,
                "longitude": -97.72709
            },
            {
                "latitude": 30.411610000000003,
                "longitude": -97.72848
            },
            {
                "latitude": 30.41213,
                "longitude": -97.72853
            }
        ]
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
                <Polyline coordinates={obj.overview_path} strokeColor="#ff00a0" strokeWidth={4} />
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