import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../components/Home';
import Header from '../components/Header';
import Lotto5Stack from '../routes/Lotto5Stack';
import Lotto6Stack from '../routes/Lotto6Stack';
import SkandiStack from '../routes/SkandiStack';

const { Navigator, Screen } = createStackNavigator();

export const HomeStack = ({ navigation }) => (
    <Navigator initialRouteName='Home'
        headerMode="screen"
        screenOptions={{
            headerStyle: {
                backgroundColor: '#09af00',
                height: 120,
            },
            headerTitleStyle: {
                color: 'white',
                fontFamily: 'nunito-bold',
                fontSize: 23,
                textAlign: 'center'
            },
            headerTintColor: 'white'
        }}
    >

        <Screen
            name='Home'
            component={Home}
            options={{
                headerTitle: () => <Header navigation={navigation} title='Válaszd ki a lottó típusát' type="Not_lotto" />
            }}
        />

        <Screen
            name="Lotto5"
            component={Lotto5Stack}
            options={{
                title: 'Ötöslottó',
                headerShown: false,
            }}
        />

        <Screen
            name="Lotto6"
            component={Lotto6Stack}
            options={{
                title: 'Hatoslottó',
                headerShown: false
            }}
        />

        <Screen
            name="Skandi"
            component={SkandiStack}
            options={{
                title: 'Skandináv lottó',
                headerShown: false
            }}
        />
    </Navigator>
);

export const AppNavigator = () => (
    <NavigationContainer>
        <HomeStack />
    </NavigationContainer>
);

export default AppNavigator;