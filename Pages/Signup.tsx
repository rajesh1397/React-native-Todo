import {
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Text,
  View,
  Image,
} from 'react-native';
import React, {useState} from 'react';

const Signup = (props: {navigation: {navigate: (arg0: string) => void}}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  console.log(email, password, confirmPassword);

  const handlelogin = () => {
    props.navigation.navigate('Login');
  };

  const handlesignup = () => {
    props.navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={require('../assets/images/signup.png')}
      />
      <View style={styles.inputcontainer}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={email => setEmail(email)}
        />
      </View>
      <View style={styles.inputcontainer}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={password => setPassword(password)}
        />
      </View>
      <View style={styles.inputcontainer}>
        <TextInput
          style={styles.TextInput}
          placeholder="confirmPassword"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={confirmPassword => setConfirmPassword(confirmPassword)}
        />
      </View>
      <TouchableOpacity style={styles.loginbtn} onPress={handlesignup}>
        <Text style={styles.Text}>Signup</Text>
      </TouchableOpacity>
      <View>
        <Text style={styles.Text}> Already have account?</Text>
      </View>
      <TouchableOpacity style={styles.signupbtn} onPress={handlelogin}>
        <Text style={styles.Text}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputcontainer: {
    backgroundColor: '#F9A82650',
    borderRadius: 10,
    width: '90%',
    height: 55,
    marginBottom: 20,
    justifyContent: 'center',
  },
  loginbtn: {
    width: '90%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 30,
    backgroundColor: '#F9A826',
  },
  signupbtn: {
    width: '90%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    backgroundColor: '#F9A826',
  },
  TextInput: {
    height: 50,
    padding: 10,
    marginLeft: 20,
  },
  Text: {
    fontSize: 24,
  },
  image: {
    width: '100%',
    height: '30%',
    marginBottom: 10,
  },
});
