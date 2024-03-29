import React, {useRef, useState} from 'react';
import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {TextInput, Title} from 'react-native-paper';

import {IMAGES} from '../../core/constants/images';
import {ROUTES} from '../../core/constants/routes';
import {SPACINGS} from '../../core/theme';

import LabelledCheckbox from '../../components/common/LabelledCheckbox';
import PrimaryButton from '../../components/common/PrimaryButton';
import VerticalSpacer from '../../components/common/VerticalSpacer';

// Todo: add typings to 'any typed'
const LoginScreen = ({navigation}: {navigation: any}) => {
  const emailRef = useRef<any>();
  const passwordRef = useRef<any>();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [pwdHidden, setPwdHidden] = useState(true);
  const [rememberMe, setRememberMe] = useState(false);

  const onLoginPressed = () => {
    navigation.replace(ROUTES.root_stack);
  };

  const toggleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.contentContainer}
      keyboardShouldPersistTaps="handled">
      <KeyboardAvoidingView behavior="position">
        <Image source={IMAGES.logo} style={styles.logo} />
        <VerticalSpacer size={20} />
        <Title style={styles.txtLogin}>Log in</Title>
        <VerticalSpacer />
        <TextInput
          ref={emailRef}
          mode="outlined"
          value={email}
          onChangeText={setEmail}
          placeholder="e.g. user101"
          label="Phone/Email"
          onSubmitEditing={() => passwordRef.current.focus()}
          returnKeyType="next"
        />
        <VerticalSpacer />
        <TextInput
          mode="outlined"
          ref={passwordRef}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={pwdHidden}
          label="Password"
          placeholder="Password"
          returnKeyType="done"
          right={
            <TextInput.Icon
              name={pwdHidden ? 'eye' : 'eye-off'}
              onPress={() => setPwdHidden(!pwdHidden)}
            />
          }
        />
        <VerticalSpacer size={10} />
        <LabelledCheckbox
          status={rememberMe}
          onPress={toggleRememberMe}
          label={'Remember me'}
        />
        <VerticalSpacer size={20} />
        <PrimaryButton label="Log in" onPress={onLoginPressed} />
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default LoginScreen;

const size = Dimensions.get('window').width;

const styles = StyleSheet.create({
  logo: {
    height: size * 0.4,
    resizeMode: 'contain',
    alignSelf: 'center',
  },

  contentContainer: {
    padding: SPACINGS.md,
    paddingTop: SPACINGS.xxxl,
  },

  txtLogin: {
    textAlign: 'center',
  },
});
