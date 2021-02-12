import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import Dashboard from '../pages/Dashboard';
import Transaction from '../pages/Transaction';
import Paper from '../pages/Paper';
import ConfigApp from '../pages/ConfigApp';

const Tab = createBottomTabNavigator();

const TabRoutes: React.FC = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: '#FFA500',
      inactiveTintColor: '#fff',
      labelStyle: {
        fontSize: 13,
      },
      style: {
        backgroundColor: '#312e38',
        paddingBottom: 10,
        paddingTop: 10,
        height: 65,
      },
    }}
  >
    <Tab.Screen
      name="Dashboard"
      component={Dashboard}
      options={{
        title: 'Principal',
        tabBarIcon: ({ size, color }) => (
          <Icon name="home" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Transaction"
      component={Transaction}
      options={{
        title: 'Transação',
        tabBarIcon: ({ size, color }) => (
          <Icon name="trending-up" size={size} color={color} />
        ),
      }}
    />
    {/* <Tab.Screen
      name="ADD"
      component={Dashboard}
      options={{
        title: '',
        tabBarIcon: ({ size, color }) => <Button />,
      }}
    /> */}
    <Tab.Screen
      name="Plan"
      component={Paper}
      options={{
        title: 'Papel',
        tabBarIcon: ({ size, color }) => (
          <Icon name="flag" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="More"
      component={ConfigApp}
      options={{
        title: 'Configuração',
        tabBarIcon: ({ size, color }) => (
          <Icon name="more-horizontal" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default TabRoutes;
