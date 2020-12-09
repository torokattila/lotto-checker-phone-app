import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function Header({ title, type }) {

    return (
        <View style={styles.header}>
            <Text style={type == 'Lotto' ? styles.lottoTypeHeaderText : styles.headerText}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        marginBottom: 20,
        justifyContent: 'center'
    },
    lottoTypeHeaderText: {
        color: 'white',
        textAlign: 'center',
        justifyContent: 'center',
        fontFamily: 'nunito-bold',
        fontSize: 25,
        marginRight: '20%'
    },
    headerText: {
        color: 'white',
        textAlign: 'center',
        justifyContent: 'center',
        fontFamily: 'nunito-bold',
        fontSize: 25,
    }
});