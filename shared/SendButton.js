import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, View, Text, KeyboardAvoidingView } from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
import cheerio from 'react-native-cheerio';

export default function SendButton(props) {
    const isAllEmpty = (currentValue) => currentValue == '';
    const numbersArray = props.numbersArray.every(isAllEmpty) ? '' : props.numbersArray.join(',');
    const [showAlertWindow, setShowAlertWindow] = useState(false);
    const [lottoNumbersFromPage, setLottoNumbersFromPage] = useState([]);
    let sameNumbersArraySet = new Set();

    const showAlert = () => {
        setShowAlertWindow(true);
    };

    const hideAlert = () => {
        setShowAlertWindow(false);
    };

    const showAlertMessageVariable = 'Igen is \n meg nem is \n de talán';
    const showAlertMessage = () => {
        return (
            <Text style={{ fontWeight: 'bold' }}>{showAlertMessageVariable}</Text>
        );
    }

    const getOtoslottoSzamok = async () => {
        let promiseArray = [];
        try {
            const response = await fetch('https://lottoszamok-api.herokuapp.com/otoslotto', {
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
        getOtoslottoSzamok().then(response => {
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
                // title={showAlertMessage()}
                message={numbersArray}
                closeOnTouchOutside={false}
                closeOnHardwareBackPress={false}
                showConfirmButton={true}
                confirmText="Értem"
                confirmButtonColor="#19b243"
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