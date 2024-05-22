import React from 'react'
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'

interface TProps {
    text: string
}

const NoData: React.FC<TProps> = ({ text }) => {
    return (
        <SafeAreaView style={styles.SafeAreaContainer}>
            <View style={styles.Container}>
                <Image
                    source={{ uri: "https://yastatic.net/s3/lavka-web/public/assets/images/emptyCart@2x.png" }}
                    style={styles.Image}
                />
                <Text style={styles.Text}>{text}</Text>
            </View>
        </SafeAreaView>
    )
}

export default NoData;

const styles = StyleSheet.create({
    SafeAreaContainer: {
        flex: 1,
        backgroundColor: '#f0f0f0', // Optional: To give a background color to the safe area
    },
    Container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Text: {
        color: '#000',
        fontSize: 20,
        marginTop: 20,
        fontWeight: 800
    },
    Image: {
        width: 120,
        height: 120,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
})
