import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Checkbox, Text} from 'react-native-paper';
interface ILabelledCheckbox {
  label: string;
  status: boolean;
  onPress: () => void;
}
const LabelledCheckbox = ({label, status, onPress}: ILabelledCheckbox) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.6} style={styles.row}>
      <Checkbox status={status ? 'checked' : 'unchecked'} onPress={onPress} />
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

export default LabelledCheckbox;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
