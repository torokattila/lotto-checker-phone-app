import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, KeyboardAvoidingView } from 'react-native';
import SendButton from '../shared/SendButton';

export default function Skandi() {
    return (
        <View style={styles.skandiContainer}>
            <Image
                source={require('../assets/skandinav.png')}
                style={styles.skandiImage}
            />
            <Text style={styles.skandiMainTitle}>Add meg a számaidat:</Text>

            <View style={styles.skandiTextInputs}>

                <TextInput
                    style={styles.skandiTextInput}
                    keyboardType='numeric'
                    maxLength={2}
                />
                <TextInput
                    style={styles.skandiTextInput}
                    keyboardType='numeric'
                    maxLength={2}
                />
                <TextInput
                    style={styles.skandiTextInput}
                    keyboardType='numeric'
                    maxLength={2}
                />
                <TextInput
                    style={styles.skandiTextInput}
                    keyboardType='numeric'
                    maxLength={2}
                />
            </View>

            <View style={styles.anotherInputRow}>

                <TextInput
                    style={styles.skandiTextInput}
                    keyboardType='numeric'
                    maxLength={2}
                />
                <TextInput
                    style={styles.skandiTextInput}
                    keyboardType='numeric'
                    maxLength={2}
                />
                <TextInput
                    style={styles.skandiTextInput}
                    keyboardType='numeric'
                    maxLength={2}
                />
            </View>

            <SendButton buttonType='skandi' />
        </View>
    );
}

const styles = StyleSheet.create({
    skandiContainer: {
        flex: 1,
        paddingTop: 60,
        alignItems: 'center',
    },
    skandiMainTitle: {
        fontFamily: 'nunito-bold',
        fontSize: 30,
        color: '#243F86',
        paddingTop: 60
    },
    skandiImage: {
        width: 250,
        height: 100
    },
    skandiTextInputs: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 40
    },
    skandiTextInput: {
        borderWidth: 2,
        borderColor: '#243F86',
        borderRadius: 50,
        width: 55,
        height: 55,
        fontSize: 20,
        marginHorizontal: 10,
        textAlign: 'center'
    },
    anotherInputRow: {
        flexDirection: 'row',
        top: 370,
        marginBottom: 40,
        position: 'absolute'
    },
});