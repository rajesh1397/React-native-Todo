import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = (props: {navigation: {navigate: (arg0: string) => void}}) => {
  const removeUserCredentials = async () => {
    try {
      await AsyncStorage.removeItem('user_credentials');
    } catch (e) {
      // remove error
    }
  };

  const handlelogout = () => {
    removeUserCredentials();
    props.navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button title="Logout" onPress={handlelogout} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9A82650',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
