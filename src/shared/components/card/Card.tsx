import React from 'react';
import {View} from 'react-native';
import useStyle from '../../hooks/use-style';
import styleSheet from './Card.styles';

export const Card = ({children}: {children: React.ReactNode}) => {
  const styles = useStyle(styleSheet);
  return <View style={styles.block}>{children}</View>;
};

export const CardHeader = ({children}: {children: React.ReactNode}) => {
  const styles = useStyle(styleSheet);
  return <View style={styles.header}>{children}</View>;
};

export const CardContent = ({children}: {children: React.ReactNode}) => {
  const styles = useStyle(styleSheet);
  return <View style={styles.content}>{children}</View>;
};

export const CardFooter = ({children}: {children: React.ReactNode}) => {
  const styles = useStyle(styleSheet);
  return <View style={styles.footer}>{children}</View>;
};
