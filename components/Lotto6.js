import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import SendButton from '../shared/SendButton';

export default function Lotto6() {
    const [firstInputValue, setFirstInputValue] = useState('');
    const [secondInputValue, setSecondInputValue] = useState('');
    const [thirdInputValue, setThirdInputValue] = useState('');
    const [fourthInputValue, setFourthInputValue] = useState('');
    const [fifthInputValue, setFifthInputValue] = useState('');
    const [sixthInputValue, setSixthInputValue] = useState('');

    let lottoNumbersArray = [firstInputValue, secondInputValue, thirdInputValue, fourthInputValue, fifthInputValue, sixthInputValue];

    return (
        <View style={styles.lotto6Container}>
            <Image
                source={require('../assets/hatoslotto.png')}
                style={styles.lotto6Image}
            />
            <Text style={styles.lotto6MainTitle}>Add meg a számaidat:</Text>

            <View style={styles.lotto6TextInputs}>

                <TextInput
                    style={styles.lotto6TextInput}
                    keyboardType='numeric'
                    maxLength={2}
                    onChangeText={text => setFirstInputValue(text)}
                />
                <TextInput
                    style={styles.lotto6TextInput}
                    keyboardType='numeric'
                    maxLength={2}
                    onChangeText={text => setSecondInputValue(text)}
                />
                <TextInput
                    style={styles.lotto6TextInput}
                    keyboardType='numeric'
                    maxLength={2}
                    onChangeText={text => setThirdInputValue(text)}
                />
                <TextInput
                    style={styles.lotto6TextInput}
                    keyboardType='numeric'
                    maxLength={2}
                    onChangeText={text => setFourthInputValue(text)}
                />
                <TextInput
                    style={styles.lotto6TextInput}
                    keyboardType='numeric'
                    maxLength={2}
                    onChangeText={text => setFifthInputValue(text)}
                />
                <TextInput
                    style={styles.lotto6TextInput}
                    keyboardType='numeric'
                    maxLength={2}
                    onChangeText={text => setSixthInputValue(text)}
                />

            </View>

            <SendButton buttonType='lotto6' />
        </View>
    );
}

const styles = StyleSheet.create({
    lotto6Container: {
        flex: 1,
        paddingTop: 60,
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    lotto6MainTitle: {
        fontFamily: 'nunito-bold',
        fontSize: 30,
        color: '#E61742',
        paddingTop: 60
    },
    lotto6Image: {
        width: 288,
        height: 100
    },
    lotto6TextInputs: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 120
    },
    lotto6TextInput: {
        borderWidth: 2,
        borderColor: '#E61742',
        borderRadius: 50,
        width: 55,
        height: 55,
        fontSize: 20,
        marginHorizontal: 3,
        textAlign: 'center'
    }
});