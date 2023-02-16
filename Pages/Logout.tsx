import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Logout = () => {
  return (
    <View style={styles.container}>
      <Text>Logout</Text>
    </View>
  );
};

export default Logout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
