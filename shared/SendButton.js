import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, View, Text, KeyboardAvoidingView } from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';

export default function SendButton(props) {
    let url = props.buttonType == 'lotto5' ? 'https://lottoszamok-api.herokuapp.com/otoslotto' : props.buttonType == 'lotto6' ? 'https://lottoszamok-api.herokuapp.com/hatoslotto' : props.buttonType == 'skandi' ? 'https://lottoszamok-api.herokuapp.com/skandinavlotto' : '';
    const isAllEmpty = (currentValue) => currentValue == '';
    const numbersFromInputString = props.numbersArray.every(isAllEmpty) ? '' : props.numbersArray.join(',');
    const [showAlertWindow, setShowAlertWindow] = useState(false);
    const [lottoNumbersFromPage, setLottoNumbersFromPage] = useState([]);
    let sameNumbersArray = [];
    let confirmButtonColor = props.buttonType == 'lotto5' ? '#19b243' : props.buttonType == 'lotto6' ? '#E61742' : props.buttonType == 'skandi' ? '#243F86' : '';
    const numberPattern = /^[0-9,]*$/;
    let lottoNumbersFromPageString = lottoNumbersFromPage.join(',');

    sameNumbersArray = props.numbersArray.filter(number => {
        return lottoNumbersFromPage.indexOf(number) !== -1;
    });

    let sameNumbersArraySet = Array.from(new Set([...sameNumbersArray]));

    const alertTitle = props.numbersArray.every(isAllEmpty) ? 'Töltsd ki az összes mezőt!' : !(numberPattern.test(numbersFromInputString)) ? 'A mezők csak számot tartalmazhatnak!' : sameNumbersArraySet.length == 0 ? 'Sajnos nem találtál el egy számot sem! :(' : ((props.buttonType == 'lotto5' && sameNumbersArraySet.length == 5) || (props.buttonType == 'lotto6' && sameNumbersArraySet.length == 6) || (props.buttonType == 'skandi' && sameNumbersArraySet.length == 7)) ? 'Gratulálunk, telitalálatod van!': 'Gratulálunk, ' + sameNumbersArraySet.length + ' találatod van!';
    const alertMessage = props.numbersArray.every(isAllEmpty) ? '' : !(numberPattern.test(numbersFromInputString)) ? '' : sameNumbersArraySet.length > 0 ? 'A találataid: ' + sameNumbersArraySet.join(',') : 'A heti nyerőszámok: ' + lottoNumbersFromPageString;

    const showAlert = () => {
        setShowAlertWindow(true);
    };

    const hideAlert = () => {
        setShowAlertWindow(false);
    };

    const getLottoSzamok = async () => {
        let promiseArray = [];
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    Accept: 'application/json'
                }
            });
            const json = await response.json();
            json.lottoszamok.forEach(number => {
                promiseArray.push(number);
            });
            return promiseArray;
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getLottoSzamok().then(response => {
            setLottoNumbersFromPage([...response]);
        });
    }, []);

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <TouchableOpacity
                onPress={() => showAlert()}
            >
                <View style={props.buttonType == 'lotto5' ? styles.Lotto5Button : props.buttonType == 'lotto6' ? styles.Lotto6Button : styles.skandiButton}>
                    <Text style={styles.buttonText}>Nézzük</Text>
                </View>
            </TouchableOpacity>

            <AwesomeAlert
                show={showAlertWindow}
                showProgress={false}
                title={alertTitle}
                message={alertMessage}
                closeOnTouchOutside={false}
                closeOnHardwareBackPress={false}
                showConfirmButton={true}
                confirmText="OK"
                confirmButtonColor={confirmButtonColor}
                onCancelPressed={() => {
                    hideAlert();
                }}
                onConfirmPressed={() => {
                    hideAlert();
                }}
            />
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
    skandiButton: {
        backgroundColor: '#243f86',
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