import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SearchScreen from '../../screens/root_stack/search';

import {ROUTES} from '../../core/constants/routes';
import {HEADER_TITLE_STYLES} from '../../core/constants/ui_configs';

const {Screen, Navigator} = createNativeStackNavigator();
const SearchStack = () => {
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
          title: 'Search',
        }}
        name={ROUTES.search}
        component={SearchScreen}
      />
    </Navigator>
  );
};

export default SearchStack;
