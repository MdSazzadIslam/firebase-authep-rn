import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {AuthContext} from '../navigators/AuthProvider';
import Input from '../components/Input';
import LoginButton from '../components/LoginButton';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {login} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      {/*  <Image
        source={require('../assets/images/logo.png')}
        style={styles.logo}
      /> */}
      <Text style={styles.title}>
        Firebase Authentication(Email and Password) - Login
      </Text>
      <Input
        value={email}
        placeholderText="Email"
        iconName="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(text) => setEmail(text)}
      />

      <Input
        value={password}
        placeholderText="Password"
        iconName="lock"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
      />

      <LoginButton title="Login" onPress={() => login(email, password)} />

      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => navigation.navigate('Registration')}>
        <Text style={styles.navButtonText}>
          Don't have an acount? Create here
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
  },

  title: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 15,
    marginBottom: 20,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
  },
});

export default Login;
