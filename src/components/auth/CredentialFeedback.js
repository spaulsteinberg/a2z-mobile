import React from 'react'
import { StyleSheet, ActivityIndicator } from 'react-native'
import Colors from '../../styles/Colors'
import { AZButton, AZFeedback } from '../ui'

const CredentialFeedback = ({ loading, success, error, onPress, btnText }) => {
    return (
        <>
            {
                error && 
                    <AZFeedback 
                        severity="error" 
                        message={error} 
                        style={styles.error} 
                    />
            }
            {
                success && 
                    <AZFeedback 
                        severity="success" 
                        message={success} 
                        style={styles.success} 
                    />
            }
            {
                loading ? 
                    <ActivityIndicator size="large" color={Colors.primary} style={styles.indicator} /> 
                    : 
                        <AZButton title={btnText} disabled={success} onPress={onPress} outerStyle={styles.indicator} />
            }
        </>
    )
}

const styles = StyleSheet.create({
    error: {
        alignItems: 'center',
        marginVertical: 8
    },
    success: {
        alignItems: 'center'
    },
    indicator: {
        marginTop: 18
    }
})

export default CredentialFeedback