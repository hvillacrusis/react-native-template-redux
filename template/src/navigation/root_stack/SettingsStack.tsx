import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SettingsScreen from '../../screens/root_stack/settings';

import {ROUTES} from '../../core/constants/routes';
import {HEADER_TITLE_STYLES} from '../../core/constants/ui_configs';

const {Screen, Navigator} = createNativeStackNavigator();
const SettingsStack = () => {
  return (
    <Navigator
      screenOptions={{
        headerTitleStyle: {
          ...HEADER_TITLE_STYLES,
        },
      }}>
      <Screen
        options={{
          headerShown: true,
          title: 'Settings',
        }}
        name={ROUTES.settings}
        component={SettingsScreen}
      />
    </Navigator>
  );
};

export default SettingsStack;
