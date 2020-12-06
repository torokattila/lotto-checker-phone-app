import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../components/Home';
import Header from '../components/Header';
import Lotto5 from '../components/Lotto5';
import Lotto6 from '../components/Lotto6';
import Skandi from '../components/Skandi';

const { Navigator, Screen } = createStackNavigator();

export const HomeStack = ({ navigation }) => (
    <Navigator
        headerMode="screen"
        screenOptions={{
            headerStyle: {
                backgroundColor: '#09af00',
                height: 120,
            },
            headerTitleStyle: {
                color: 'white',
                fontFamily: 'nunito-bold',
                fontSize: 23
            },
            headerTintColor: 'white'
        }}
    >

        <Screen
            name='Home'
            component={Home}
            options={{
                headerTitle: () => <Header navigation={navigation} title='Válaszd ki a lottó típusát' />
            }}
        />

        <Screen
            name="Lotto5"
            component={Lotto5}
            options={{
                title: 'Ötöslottó'
            }}
        />

        <Screen
            name="Lotto6"
            component={Lotto6}
            options={{
                title: 'Hatoslottó'
            }}
        />

        <Screen
            name="Skandi"
            component={Skandi}
            options={{
                title: 'Skandináv lottó'
            }}
        />
    </Navigator>
);

export default HomeStack;