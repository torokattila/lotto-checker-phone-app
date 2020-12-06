import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import HomeStack from './HomeStack';
import Lotto5Stack from './Lotto5Stack';
import Lotto6Stack from './Lotto6Stack';
import SkandiStack from './SkandiStack';

const { Navigator, Screen } = createDrawerNavigator();

export const RootDrawerNavigator = () => (
    <Navigator initialRouteName='Home'>
        <Screen
            name='Home'
            component={HomeStack}
        />

        <Screen
            name='Lotto5'
            component={Lotto5Stack}
        />

        <Screen
            name='Lotto6'
            component={Lotto6Stack}
        />

        <Screen
            name='Skandi'
            component={SkandiStack}
        />
    </Navigator>
);

export const AppNavigator = () => (
    <NavigationContainer>
        <RootDrawerNavigator />
    </NavigationContainer>
);

export default AppNavigator;