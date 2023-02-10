import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Pages
import Home from '../../Pages/Home';
import Addtodotab from '../Addtodotab/Addtodotab';

const Tab = createBottomTabNavigator();

const Hometab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Addtodo" component={Addtodotab} />
    </Tab.Navigator>
  );
};

export default Hometab;
