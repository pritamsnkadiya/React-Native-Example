import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import Splash from './screens/Splash';
import Home from './screens/Home';
import AllHairDesign from './screens/AllHairDesign';
import HairDesign from './screens/HairDesign';

const AppNavigator = createStackNavigator({

    Splash:
        {
            screen: Splash,
            navigationOptions: {
                header: null,
            },
        },

    Home:
        {
            screen: Home,
            navigationOptions: {
                header: null,
            },
        },

    AllHairDesign:
        {
            screen: AllHairDesign,
            navigationOptions: {
                header: null,
            },
        },
    HairDesign:
        {
            screen: HairDesign,
            navigationOptions: {
                header: null,
            },
        },
});

export default createAppContainer(AppNavigator);