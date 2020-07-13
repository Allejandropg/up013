import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import Icon from 'react-native-vector-icons/MaterialIcons';
import IconF from 'react-native-vector-icons/FontAwesome';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import Command from './pages/Dashboard/Command';
import ConfirmCommand from './pages/Dashboard/Confirm';

import List from './pages/Schedules/List';
import ConfirmSchedule from './pages/Schedules/Confirm';

import Profile from './pages/Profile';

export default (signedIn = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
          SignUp,
        }),
        App: createBottomTabNavigator(
          {
            Dashboard: {
              screen: createStackNavigator(
                {
                  Command,
                  ConfirmCommand,
                },
                {
                  defaultNavigationOptions: {
                    headerTransparent: true,
                  },
                }
              ),
              navigationOptions: {
                title: null,
                headerLeft: null,
                tabBarLabel: 'Comanda',
                tabBarIcon: ({ tintColor }) => {
                  return (
                    <IconF name="file-text-o" size={20} color={tintColor} />
                  );
                },
              },
            },
            Schedules: {
              screen: createStackNavigator(
                {
                  List,
                  ConfirmSchedule,
                },
                {
                  defaultNavigationOptions: {
                    headerTransparent: true,
                  },
                }
              ),
              navigationOptions: {
                tabBarLabel: 'Agendamentos',
                tabBarIcon: ({ tintColor }) => {
                  return <IconF name="scissors" size={20} color={tintColor} />;
                },
              },
            },
            Profile,
          },
          {
            initialRouteName: 'Schedules',
            resetOnBlur: true,
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#FFF',
              activeBackgroundColor: '#707070',
              style: {
                backgroundColor: '#dedede',
                borderTopLeftRadius: 35,
                paddingLeft: '5%',
                paddingRight: '5%',
              },
              tabStyle: {
                marginLeft: '3%',
                marginRight: '3%',
              },
            },
          }
        ),
      },
      {
        initialRouteName: signedIn ? 'App' : 'Sign',
      }
    )
  );
