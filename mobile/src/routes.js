import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import SelectProvider from './pages/New/SelectProvider';
import SelectDateTime from './pages/New/SelectDateTime';
import Confirm from './pages/New/Confirm';

import Dashboard from './pages/Dashboard/List';
import Command from './pages/Dashboard/Command';
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
                  Dashboard,
                  Command,
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
                tabBarLabel: 'Histórico',
                tabBarIcon: ({ tintColor }) => {
                  return <Icon name="restore" size={20} color={tintColor} />;
                },
              },
            },
            New: {
              screen: createStackNavigator(
                {
                  SelectProvider,
                  SelectDateTime,
                  Confirm,
                },
                {
                  defaultNavigationOptions: {
                    headerTransparent: true,
                  },
                }
              ),
              navigationOptions: {
                tabBarLabel: 'Agendar',
                tabBarIcon: ({ tintColor }) => {
                  return (
                    <Icon
                      name="add-circle-outline"
                      size={20}
                      color={tintColor}
                    />
                  );
                },
              },
            },
            Profile,
          },
          {
            initialRouteName: 'Dashboard',
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
