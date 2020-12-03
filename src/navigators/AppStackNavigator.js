import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Profile from '../screens/Profile';

const AppStack = createStackNavigator();

const AppStackNavigator = () => {
  return (
    <AppStack.Navigator initialRouteName="Profile">
      <AppStack.Screen name="Profile" component={Profile} />
    </AppStack.Navigator>
  );
};

export default AppStackNavigator;
