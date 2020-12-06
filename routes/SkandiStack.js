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
                backgroundColor: '#09af00',
                height: 90
            },
            headerTitleStyle: {
                color: 'white',
                fontFamily: 'nunito-bold'
            }
        }}
    >
        <Screen
            name='Skandi'
            component={Skandi}
            options={{
                headerTitle: () => <Header navigation={navigation} title='Skandináv Lottó' />
            }}
        />
    </Navigator>
);

export default SkandiStack;