import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Login from '../screens/Login';
import Registration from '../screens/Registration';

const AuthStack = createStackNavigator();

const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <AuthStack.Screen
        name="Login"
        component={Login}
        options={{header: () => null}}
      />
      <AuthStack.Screen
        name="Registration"
        component={Registration}
        options={({navigation}) => ({
          title: '',
          headerStyle: {
            backgroundColor: '#f9fafd',
            shadowColor: '#f9fafd',
            elevation: 0,
          },
          headerLeft: () => (
            <View style={{marginLeft: 10}}>
              <FontAwesome.Button
                name="long-arrow-left"
                size={25}
                backgroundColor="#f9fafd"
                color="red"
                onPress={() => navigation.navigate('Login')}
              />
            </View>
          ),
        })}
      />
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigator;
