import React from 'react';
import {View, TextInput, TextInputProps} from 'react-native';
import styleSheet from './ThemedInput.styles';
import useStyle from '../../hooks/use-style';

type ThemedInputProps = TextInputProps;

export const ThemedInput = (props: ThemedInputProps) => {
  const styles = useStyle(styleSheet);
  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.input} {...props} />
    </View>
  );
};
