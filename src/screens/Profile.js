import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {AuthContext} from '../navigators/AuthProvider';
import LoginButton from '../components/LoginButton';

const Profile = () => {
  const {user, logout} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome {user.email}</Text>
      <LoginButton title="Logout" onPress={() => logout()} />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9fafd',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 20,
    color: '#333333',
  },
});
