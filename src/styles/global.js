import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
    screenContainer: {
        marginHorizontal: 12,
        marginVertical: 8
    },
    iosShadow: {
        shadowColor: 'black',
        shadowOffset: { width: 1, height: 1 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
    }
})

export default globalStyles