import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Header from '../components/Header';
import Lotto6 from '../components/Lotto6';

const { Navigator, Screen } = createStackNavigator();

export const Lotto6Stack = ({ navigation }) => (
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
            name='Lotto6'
            component={Lotto6}
            options={{
                headerTitle: () => <Header navigation={navigation} title='Hatoslottó' />
            }}
        />
    </Navigator>
);

export default Lotto6Stack;