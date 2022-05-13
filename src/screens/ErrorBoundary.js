import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import Colors from '../styles/Colors';
import { View, Text, StyleSheet } from 'react-native';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return (
                <View style={styles.container}>
                    <View style={styles.iconContainer}>
                        <AntDesign name="exclamationcircle" size={24} color={Colors.primary} />
                        <Text style={styles.largeText}>Something went wrong!</Text>
                    </View>
                    <Text style={styles.smallText}>
                        An issue occurred and we need to send you back to the login screen. We apologize for the inconvenience.
                    </Text>
                </View>
            );
        }

        return this.props.children;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 40,
        marginHorizontal: 20,
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    largeText: {
        fontSize: 24,
        marginLeft: 10
    },
    smallText: {
        textAlign: 'center',
        marginTop: 12
    }
})

export default ErrorBoundary