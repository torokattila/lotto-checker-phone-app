import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, KeyboardAvoidingView } from 'react-native';

export default function SendButton(props) {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <TouchableOpacity>
                <View style={props.buttonType == 'lotto5' ? styles.Lotto5Button : props.buttonType == 'lotto6' ? styles.Lotto6Button : styles.skandiButton}>
                    <Text style={styles.buttonText}>Nézzük</Text>
                </View>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    Lotto5Button: {
        backgroundColor: '#09af00',
        width: 330,
        height: 60,
        marginBottom: 50,
        borderRadius: 30,
        elevation: 3,
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
    },
    Lotto6Button: {
        backgroundColor: '#E61742',
        width: 330,
        height: 60,
        marginBottom: 50,
        borderRadius: 30,
        elevation: 3,
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
    },
    buttonText: {
        textAlign: 'center',
        textTransform: 'uppercase',
        color: 'white',
        fontSize: 25,
        fontFamily: 'nunito-bold',
        paddingTop: 12
    }
});