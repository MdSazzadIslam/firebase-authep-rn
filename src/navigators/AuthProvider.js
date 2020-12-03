import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState('null');
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            var result = await auth().signInWithEmailAndPassword(
              email,
              password,
            );
            console.log(result);
          } catch (e) {
            console.log(e);
          }
        },

        register: async (email, password) => {
          try {
            var result = await auth().createUserWithEmailAndPassword(
              email,
              password,
            );
            console.log(result);
          } catch (e) {
            console.log(e);
          }
        },
        logout: async () => {
          try {
            var result = await auth().signOut();
            console.log(result);
          } catch (e) {
            console.log(e);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
