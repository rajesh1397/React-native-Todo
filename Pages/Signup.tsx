import {
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Text,
  View,
  Image,
  Modal,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {UserObject} from './Login';

const Signup = (props: {navigation: {navigate: (arg0: string) => void}}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [errText, setErrText] = useState('');

  const storeCredentials = async (userObj: UserObject) => {
    try {
      await AsyncStorage.setItem('user_credentials', JSON.stringify(userObj));
    } catch (error) {
      console.log(error);
    }
  };

  const handlelogin = () => {
    props.navigation.navigate('Login');
  };

  const handlesignup = () => {
    const passwordRegex = new RegExp(
      '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})',
    );

    const userObj = {
      userEmail: email,
      userPassword: password,
    };

    if (!email.match(/[^\s@]+@[^\s@]+\.[^\s@]+/gi)) {
      setErrText('Enter a valid Email id');
      setShowModal(true);
    } else if (!passwordRegex.test(password)) {
      setErrText(
        'Password must contain 1 Uppercase, 1 lowercse, 1 special char and of length 8',
      );
      setShowModal(true);
    } else if (password !== confirmPassword) {
      setErrText("Passwords don't match");
      setShowModal(true);
    } else {
      setShowModal(false);
      storeCredentials(userObj);
      props.navigation.navigate('Home');
    }
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={showModal}
        onRequestClose={() => {
          setShowModal(false);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{errText}</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setShowModal(false)}>
              <Text style={styles.textStyle}>Retry Login/Signup</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: '#F9A826',
    borderRadius: 20,
    padding: 55,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 6,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#F9A82690',
  },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    color: '#ffffff',
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
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
