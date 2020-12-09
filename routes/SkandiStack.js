import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Header from '../components/Header';
import Skandi from '../components/Skandi';

const { Navigator, Screen } = createStackNavigator();

export const SkandiStack = ({ navigation }) => (
    <Navigator
        headerMode='screen'
        screenOptions={{
            headerStyle: {
                backgroundColor: '#243F86',
                height: 100
            },
            headerTitleStyle: {
                color: 'white',
                fontFamily: 'nunito-bold'
            },
            headerTintColor: 'white'
        }}
    >
        <Screen
            name='Skandi'
            component={Skandi}
            options={{
                headerTitle: () => <Header navigation={navigation} title='Skandináv Lottó' type="Lotto" />
            }}
        />
    </Navigator>
);

export default SkandiStack;