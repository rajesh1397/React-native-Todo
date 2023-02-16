import 'react-native-gesture-handler';
import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Hometab from './Tabs/Hometab/Hometab';
import Logout from './Pages/Logout';

// Redux store
import {store} from './Redux/store';
import {Provider} from 'react-redux';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerHometab() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Home" component={Hometab} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <NativeBaseProvider>
          <Drawer.Navigator>
            <Drawer.Screen
              name="Root"
              component={DrawerHometab}
              options={{
                headerShown: false,
              }}
            />
            <Drawer.Screen name="Logout" component={Logout} />
          </Drawer.Navigator>
        </NativeBaseProvider>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
