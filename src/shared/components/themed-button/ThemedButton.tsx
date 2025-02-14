import React from 'react';
import {Pressable, Text} from 'react-native';
import useStyle from '@/src/shared/hooks/use-style';
import styleSheet from './ThemedButton.styles';

export const ThemedButton = ({
  onPress,
  title,
}: {
  onPress: () => void;
  title: string;
}) => {
  const styles = useStyle(styleSheet);

  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        styles.button,
        pressed ? styles.pressedBackground : styles.defaultBackground,
      ]}>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};
