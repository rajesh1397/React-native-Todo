import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Home = (props: {navigation: {navigate: (arg0: string) => void}}) => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button
        title="Logout"
        onPress={() => props.navigation.navigate('Login')}
      />
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
