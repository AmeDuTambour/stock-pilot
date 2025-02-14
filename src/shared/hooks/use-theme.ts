import {useColorScheme, ColorSchemeName} from 'react-native';
import {Colors} from '../styles/theme';
import {ThemeColors} from '../types/theme.types';

export const useTheme = (): ThemeColors => {
  const colorScheme: ColorSchemeName = useColorScheme();
  return Colors[colorScheme ?? 'light'];
};
