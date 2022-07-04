import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {Button, Title} from 'react-native-paper';

import VerticalSpacer from '../../../components/common/VerticalSpacer';

import {SPACINGS} from '../../../core/theme';
import {ROUTES} from '../../../core/constants/routes';
import {Counter} from '../../../features/counter/Counter';

const HomeScreen = ({navigation}: {navigation: any}) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.contentContainer}>
      <Title>Counter Redux Example</Title>
      <Counter />
      <VerticalSpacer />
      <Button onPress={() => navigation.navigate(ROUTES.search_stack)}>
        Take me to Search
      </Button>
      <Button onPress={() => navigation.navigate(ROUTES.settings_stack)}>
        Take me to Settings
      </Button>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  contentContainer: {
    padding: SPACINGS.xs,
  },
});
