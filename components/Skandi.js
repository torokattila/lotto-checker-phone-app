import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Checkbox from '@react-native-community/checkbox';
import HideWithKeyboard from 'react-native-hide-with-keyboard';
import SendButton from '../shared/SendButton';

export default function Skandi() {
    const [machineIsSelected, setMachineIsSelected] = useState(false);
    const [handIsSelected, setHandIsSelected] = useState(false);
    const [disabledMachineCheckbox, setDisabledMachineCheckbox] = useState(false);
    const [disabledHandCheckbox, setDisabledHandCheckbox] = useState(false);

    const [firstInputValue, setFirstInputValue] = useState('');
    const [secondInputValue, setSecondInputValue] = useState('');
    const [thirdInputValue, setThirdInputValue] = useState('');
    const [fourthInputValue, setFourthInputValue] = useState('');
    const [fifthInputValue, setFifthInputValue] = useState('');
    const [sixthInputValue, setSixthInputValue] = useState('');
    const [seventhInputValue, setSeventhInputValue] = useState('');

    const input2 = useRef(null);
    const input3 = useRef(null);
    const input4 = useRef(null);
    const input5 = useRef(null);
    const input6 = useRef(null);
    const input7 = useRef(null)

    let lottoNumbersArray = [firstInputValue, secondInputValue, thirdInputValue, fourthInputValue, fifthInputValue, sixthInputValue, seventhInputValue];

    const handleChangeMachineCheckbox = () => {
        setMachineIsSelected(!machineIsSelected);
        setDisabledHandCheckbox(!disabledHandCheckbox);
    }

    const handleChangeHandCheckbox = () => {
        setHandIsSelected(!handIsSelected);
        setDisabledMachineCheckbox(!disabledMachineCheckbox);
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.skandiContainer}>
                <Image
                    source={require('../assets/skandinav.png')}
                    style={styles.skandiImage}
                />
                <Text style={styles.skandiMainTitle}>Add meg a számaidat:</Text>

                <View style={styles.checkboxContainer}>
                    <View style={styles.machineCheckboxContainer}>
                        <Text style={styles.machineCheckboxLabel}>Gépi sorsolás</Text>
                        <Checkbox
                            disabled={disabledMachineCheckbox}
                            style={styles.machineCheckbox}
                            value={machineIsSelected}
                            onValueChange={handleChangeMachineCheckbox}
                        />
                    </View>

                    <View style={styles.handCheckboxContainer}>
                        <Text style={styles.handChekboxLabel}>Kézi sorsolás</Text>
                        <Checkbox
                            disabled={disabledHandCheckbox}
                            style={styles.handCheckbox}
                            value={handIsSelected}
                            onValueChange={handleChangeHandCheckbox}
                        />
                    </View>
                </View>

                <View style={styles.skandiTextInputs}>

                    <TextInput
                        style={styles.skandiTextInput}
                        keyboardType='numeric'
                        maxLength={2}
                        onChangeText={text => setFirstInputValue(text)}
                        returnKeyType='next'
                        blurOnSubmit={false}
                        onSubmitEditing={() => input2.current.focus()}
                    />
                    <TextInput
                        ref={input2}
                        style={styles.skandiTextInput}
                        keyboardType='numeric'
                        maxLength={2}
                        onChangeText={text => setSecondInputValue(text)}
                        returnKeyType='next'
                        blurOnSubmit={false}
                        onSubmitEditing={() => input3.current.focus()}
                    />
                    <TextInput
                        ref={input3}
                        style={styles.skandiTextInput}
                        keyboardType='numeric'
                        maxLength={2}
                        onChangeText={text => setThirdInputValue(text)}
                        returnKeyType='next'
                        blurOnSubmit={false}
                        onSubmitEditing={() => input4.current.focus()}
                    />
                    <TextInput
                        ref={input4}
                        style={styles.skandiTextInput}
                        keyboardType='numeric'
                        maxLength={2}
                        onChangeText={text => setFourthInputValue(text)}
                        returnKeyType='next'
                        blurOnSubmit={false}
                        onSubmitEditing={() => input5.current.focus()}
                    />
                </View>

                <View style={styles.anotherInputRow}>

                    <TextInput
                        ref={input5}
                        style={styles.skandiTextInput}
                        keyboardType='numeric'
                        maxLength={2}
                        onChangeText={text => setFifthInputValue(text)}
                        returnKeyType='next'
                        blurOnSubmit={false}
                        onSubmitEditing={() => input6.current.focus()}
                    />
                    <TextInput
                        ref={input6}
                        style={styles.skandiTextInput}
                        keyboardType='numeric'
                        maxLength={2}
                        onChangeText={text => setSixthInputValue(text)}
                        returnKeyType='next'
                        blurOnSubmit={false}
                        onSubmitEditing={() => input7.current.focus()}
                    />
                    <TextInput
                        ref={input7}
                        style={styles.skandiTextInput}
                        keyboardType='numeric'
                        maxLength={2}
                        onChangeText={text => setSeventhInputValue(text)}
                        returnKeyType='done'
                    />
                </View>

                <HideWithKeyboard>
                    <SendButton numbersArray={lottoNumbersArray} buttonType='skandi' machineCheckbox={machineIsSelected} handCheckbox={handIsSelected} />
                </HideWithKeyboard>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    skandiContainer: {
        flex: 1,
        paddingTop: '10%',
        alignItems: 'center',
    },
    skandiMainTitle: {
        fontFamily: 'nunito-bold',
        fontSize: 30,
        color: '#243F86',
        paddingTop: '10%',
        paddingBottom: '5%',
    },
    skandiImage: {
        width: 250,
        height: 100
    },
    skandiTextInputs: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 20
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
        position: 'absolute'
    },
    checkboxContainer: {
        flexDirection: 'row'
    },
    machineCheckboxContainer: {
        flexDirection: 'row'
    },
    handCheckboxContainer: {
        flexDirection: 'row'
    },
    machineCheckboxLabel: {
        color: '#243F86',
        fontSize: 20
    },
    handChekboxLabel: {
        color: '#243F86',
        fontSize: 20
    }
});