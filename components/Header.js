import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function Header({ navigation, title }) {

    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        marginBottom: 20,
        justifyContent: 'center',
    },
    headerText: {
        color: 'white',
        textAlign: 'center',
        fontFamily: 'nunito-bold',
        fontSize: 25,
    },
    icon: {
        position: 'absolute',
        left: 16
    }
});