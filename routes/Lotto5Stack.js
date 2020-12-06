import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Header from '../components/Header';
import Lotto5 from '../components/Lotto5';

const { Navigator, Screen } = createStackNavigator();

export const Lotto5Stack = ({ navigation }) => (
    <Navigator
        headerMode='screen'
        screenOptions={{
            headerStyle: {
                backgroundColor: '#09af00',
                height: 90,
            },
            headerTitleStyle: {
                color: 'white',
                fontFamily: 'nunito-bold',
            }
        }}
    >
        <Screen
            name='Lotto5'
            component={Lotto5}
            options={{
                headerTitle: () => <Header navigation={navigation} title='Ötöslottó' />
            }}
        />
    </Navigator>
);

export default Lotto5Stack;