import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Hometab from './Tabs/Hometab/Hometab';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Home" component={Hometab} />
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

export default App;
