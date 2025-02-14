import {useMemo} from 'react';
import {StyleSheet} from 'react-native';
import {ThemeColors} from '../types/theme.types';
import {useTheme} from './use-theme';

export default function useStyle<
  T extends StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>,
>(
  styling: (theme: ThemeColors) => ReturnType<typeof StyleSheet.create<T>>,
): ReturnType<typeof StyleSheet.create<T>> {
  const theme = useTheme();
  return useMemo(() => styling(theme), [styling, theme]);
}
