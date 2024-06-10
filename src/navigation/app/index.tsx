import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PaymentsStack from './payments';

const AppStack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <AppStack.Navigator screenOptions={{headerShown: false}}>
      <AppStack.Screen name="app" component={PaymentsStack} />
    </AppStack.Navigator>
  );
};

export default AppNavigation;
