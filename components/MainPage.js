import { StyleSheet, View } from 'react-native';
import React from 'react';
import Header from './Header';
import Home from './Home';

export default function Container() {
    return (
        <View style={styles.container}>
            <Home />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'nunito'
    }
});