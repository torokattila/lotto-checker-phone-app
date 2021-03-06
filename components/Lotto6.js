import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import HideWithKeyboard from 'react-native-hide-with-keyboard';
import SendButton from '../shared/SendButton';

export default function Lotto6() {
    const [firstInputValue, setFirstInputValue] = useState('');
    const [secondInputValue, setSecondInputValue] = useState('');
    const [thirdInputValue, setThirdInputValue] = useState('');
    const [fourthInputValue, setFourthInputValue] = useState('');
    const [fifthInputValue, setFifthInputValue] = useState('');
    const [sixthInputValue, setSixthInputValue] = useState('');

    const input2 = useRef(null);
    const input3 = useRef(null);
    const input4 = useRef(null);
    const input5 = useRef(null);
    const input6 = useRef(null);

    let lottoNumbersArray = [firstInputValue, secondInputValue, thirdInputValue, fourthInputValue, fifthInputValue, sixthInputValue];

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
                        returnKeyType='next'
                        blurOnSubmit={false}
                        onSubmitEditing={() => input2.current.focus()}
                    />
                    <TextInput
                        ref={input2}
                        style={styles.lotto6TextInput}
                        keyboardType='numeric'
                        maxLength={2}
                        onChangeText={text => setSecondInputValue(text)}
                        returnKeyType='next'
                        blurOnSubmit={false}
                        onSubmitEditing={() => input3.current.focus()}
                    />
                    <TextInput
                        ref={input3}
                        style={styles.lotto6TextInput}
                        keyboardType='numeric'
                        maxLength={2}
                        onChangeText={text => setThirdInputValue(text)}
                        returnKeyType='next'
                        blurOnSubmit={false}
                        onSubmitEditing={() => input4.current.focus()}
                    />
                    <TextInput
                        ref={input4}
                        style={styles.lotto6TextInput}
                        keyboardType='numeric'
                        maxLength={2}
                        onChangeText={text => setFourthInputValue(text)}
                        returnKeyType='next'
                        blurOnSubmit={false}
                        onSubmitEditing={() => input5.current.focus()}
                    />
                    <TextInput
                        ref={input5}
                        style={styles.lotto6TextInput}
                        keyboardType='numeric'
                        maxLength={2}
                        onChangeText={text => setFifthInputValue(text)}
                        returnKeyType='next'
                        blurOnSubmit={false}
                        onSubmitEditing={() => input6.current.focus()}
                    />
                    <TextInput
                        ref={input6}
                        style={styles.lotto6TextInput}
                        keyboardType='numeric'
                        maxLength={2}
                        onChangeText={text => setSixthInputValue(text)}
                        returnKeyType='done'
                    />

                </View>

                <HideWithKeyboard>
                    <SendButton numbersArray={lottoNumbersArray} buttonType='lotto6' />
                </HideWithKeyboard>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    lotto6Container: {
        flex: 1,
        paddingTop: '15%',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    lotto6MainTitle: {
        fontFamily: 'nunito-bold',
        fontSize: 30,
        color: '#E61742',
        paddingTop: '15%',
        textAlign: 'center'
    },
    lotto6Image: {
        width: 288,
        height: 100
    },
    lotto6TextInputs: {
        flex: 1,
        flexDirection: 'row',
        marginTop: '30.5%'
    },
    lotto6TextInput: {
        borderWidth: 2,
        borderColor: '#E61742',
        borderRadius: 50,
        width: 55,
        height: 55,
        fontSize: 20,
        marginHorizontal: '1%',
        textAlign: 'center'
    }
});