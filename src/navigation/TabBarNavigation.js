import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainPage from '../screens/Main/MainPage';
import json from './navigationTabs.json';
import {Image} from 'react-native';
import EPAMPage from '../screens/Epam/EPAMPage';
import VolpisPage from '../screens/Volpis/VolpisPage';

const Stack = createStackNavigator();

const HomeStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={json.homeTab.routeName}
      component={MainPage}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

const EPAMStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={json.epamTab.routeName}
      component={EPAMPage}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

const VolpisStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={json.epamTab.routeName}
      component={VolpisPage}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name={json.homeTab.routeName}
      component={HomeStackNavigator}
      options={({route}) => ({
        headerShown: false,
        tabBarIcon: () => (
          <Image
            source={{uri: json.homeTab.icon}}
            style={{width: 30, height: 30}}
          />
        ),
      })}
    />
    <Tab.Screen
      name={json.epamTab.routeName}
      component={EPAMStackNavigator}
      options={({route}) => ({
        headerShown: false,
        tabBarIcon: () => (
          <Image
            source={{uri: json.epamTab.icon}}
            style={{width: 30, height: 30}}
          />
        ),
      })}
    />
    <Tab.Screen
      name={json.volpisTab.routeName}
      component={VolpisStackNavigator}
      options={({route}) => ({
        headerShown: false,
        tabBarIcon: () => (
          <Image
            source={{uri: json.volpisTab.icon}}
            style={{width: 30, height: 30}}
          />
        ),
      })}
    />
  </Tab.Navigator>
);
