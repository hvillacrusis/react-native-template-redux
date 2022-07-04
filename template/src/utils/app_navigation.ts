import React from 'react';
//Todo: add types to navigation references
export const navigationRef = React.createRef<any>();

const navigation = {
  navigate: (name: string, params = {}) =>
    navigationRef.current?.navigate(name, params),
  goBack: () => navigationRef.current?.goBack(),
};

export default navigation;
