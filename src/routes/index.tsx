import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import RoutesPage from './RoutesTab';
import Notification from '../pages/Notification';
import ConfigurationHelp from '../pages/ConfigurationHelp';
import ConfigurationPerfil from '../pages/ConfigurationPerfil';
import ConfigurationAccount from '../pages/ConfigurationAccount';
import ConfigurationNotification from '../pages/ConfigurationNotification';

import Abbout from '../pages/Abbout';

const Stack = createStackNavigator();

const Routes: React.FC = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Tabs" component={RoutesPage} />
    <Stack.Screen name="Notification" component={Notification} />
    <Stack.Screen name="Help" component={ConfigurationHelp} />
    <Stack.Screen name="Perfil" component={ConfigurationPerfil} />
    <Stack.Screen name="Account" component={ConfigurationAccount} />
    <Stack.Screen
      name="ConfigurationNotification"
      component={ConfigurationNotification}
    />
    <Stack.Screen name="Abbout" component={Abbout} />
  </Stack.Navigator>
);

export default Routes;
