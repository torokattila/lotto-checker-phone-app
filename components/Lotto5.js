import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import HideWithKeyboard from 'react-native-hide-with-keyboard';
import SendButton from '../shared/SendButton';

export default function Lotto5() {
    const [firstInputValue, setFirstInputValue] = useState('');
    const [secondInputValue, setSecondInputValue] = useState('');
    const [thirdInputValue, setThirdInputValue] = useState('');
    const [fourthInputValue, setFourthInputValue] = useState('');
    const [fifthInputValue, setFifthInputValue] = useState('');

    const input2 = useRef(null);
    const input3 = useRef(null);
    const input4 = useRef(null);
    const input5 = useRef(null);

    let lottoNumbersArray = [firstInputValue, secondInputValue, thirdInputValue, fourthInputValue, fifthInputValue];

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
                        onChangeText={text => setFirstInputValue(text)}
                        returnKeyType='next'
                        blurOnSubmit={false}
                        onSubmitEditing={() => input2.current.focus()}
                    />
                    <TextInput
                        ref={input2}
                        style={styles.lotto5TextInput}
                        keyboardType='numeric'
                        maxLength={2}
                        onChangeText={text => setSecondInputValue(text)}
                        returnKeyType='next'
                        blurOnSubmit={false}
                        onSubmitEditing={() => input3.current.focus()}
                    />
                    <TextInput
                        ref={input3}
                        style={styles.lotto5TextInput}
                        keyboardType='numeric'
                        maxLength={2}
                        onChangeText={text => setThirdInputValue(text)}
                        returnKeyType='next'
                        blurOnSubmit={false}
                        onSubmitEditing={() => input4.current.focus()}
                    />
                    <TextInput
                        ref={input4}
                        style={styles.lotto5TextInput}
                        keyboardType='numeric'
                        maxLength={2}
                        onChangeText={text => setFourthInputValue(text)}
                        returnKeyType='next'
                        blurOnSubmit={false}
                        onSubmitEditing={() => input5.current.focus()}
                    />
                    <TextInput
                        ref={input5}
                        style={styles.lotto5TextInput}
                        keyboardType='numeric'
                        maxLength={2}
                        onChangeText={text => setFifthInputValue(text)}
                        returnKeyType='done'
                    />

                </View>

                <HideWithKeyboard>
                    <SendButton numbersArray={lottoNumbersArray} buttonType='lotto5' />
                </HideWithKeyboard>
            </View >
        </TouchableWithoutFeedback>
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