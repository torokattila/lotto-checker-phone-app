import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import SendButton from '../shared/SendButton';

export default function Lotto5() {
    return (
        <View style={styles.lotto5Container}>
            <Image
                source={require('../assets/otoslotto.png')}
                style={styles.lotto5Image}
            />
            <Text style={styles.lotto5MainTitle}>Add meg a számaidat:</Text>

            <View style={styles.lotto5TextInputs}>

                <TextInput
                    style={styles.lotto5TextInput}
                    keyboardType='numeric'
                    maxLength={2}
                />
                <TextInput
                    style={styles.lotto5TextInput}
                    keyboardType='numeric'
                    maxLength={2}
                />
                <TextInput
                    style={styles.lotto5TextInput}
                    keyboardType='numeric'
                    maxLength={2}
                />
                <TextInput
                    style={styles.lotto5TextInput}
                    keyboardType='numeric'
                    maxLength={2}
                />
                <TextInput
                    style={styles.lotto5TextInput}
                    keyboardType='numeric'
                    maxLength={2}
                />

            </View>

            <SendButton buttonType='lotto5' />
        </View>
    );
}

const styles = StyleSheet.create({
    lotto5Container: {
        flex: 1,
        paddingTop: 60,
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    lotto5MainTitle: {
        fontFamily: 'nunito-bold',
        fontSize: 30,
        color: '#09af00',
        paddingTop: 60
    },
    lotto5Image: {
        width: 250,
        height: 100
    },
    lotto5TextInputs: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 120
    },
    lotto5TextInput: {
        borderWidth: 2,
        borderColor: '#09af00',
        borderRadius: 50,
        width: 55,
        height: 55,
        fontSize: 20,
        marginHorizontal: 10,
        textAlign: 'center'
    }
});