import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Input from '../components/Input';
import LoginButton from '../components/LoginButton';
import {AuthContext} from '../navigators/AuthProvider';

const Registration = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState();

  const {register} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      {/* <Image
        source={require('../assets/images/logo.png')}
        style={styles.logo}
      /> */}
      <Text style={styles.title}>
        Firebase Authentication(Email and Password) - Registration
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

      <Input
        value={confirmPassword}
        placeholderText="confirmPassword"
        iconName="lock"
        secureTextEntry={true}
        onChangeText={(text) => setConfirmPassword(text)}
      />

      <LoginButton
        title="Registration"
        onPress={() => register(email, password)}
      />

      <View style={styles.privacyContainer}>
        <Text style={styles.privacyTitle}>
          By registering, you confirm that you accept our{' '}
        </Text>
        <TouchableOpacity>
          <Text style={[styles.privacyTitle, {color: '#e88832'}]}>
            Terms of service
          </Text>
        </TouchableOpacity>
        <Text style={styles.privacyTitle}> and </Text>
        <Text style={[styles.privacyTitle, {color: '#e88832'}]}>
          Privacy Policy
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50,
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
  privacyContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 35,
    justifyContent: 'center',
  },
  privacyTitle: {
    fontSize: 13,
    fontWeight: '400',
    fontFamily: 'Lato-Regular',
    color: 'grey',
  },
});

export default Registration;
