import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {BottomTabNavigator} from './TabBarNavigation';

const Stack = createStackNavigator();

const Router = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={BottomTabNavigator} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Router;
