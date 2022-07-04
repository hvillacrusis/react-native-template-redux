import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';

import {navTheme, paperTheme} from './src/core/theme';

import AppNavigation from './src/navigation';
import {navigationRef} from './src/utils/app_navigation';

const App = () => {
  return (
    <PaperProvider theme={paperTheme}>
      <NavigationContainer theme={navTheme} ref={navigationRef}>
        <AppNavigation />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
