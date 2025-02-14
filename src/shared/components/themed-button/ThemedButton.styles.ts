import {Radius, Spaces, ThemeColors} from '@/src/shared/types/theme.types';
import {StyleSheet} from 'react-native';

const styleSheet = (theme: ThemeColors) =>
  StyleSheet.create({
    button: {
      paddingVertical: Spaces.md,
      paddingHorizontal: Spaces.lg,
      borderRadius: Radius.xs,
      alignItems: 'center',
      marginVertical: Spaces.sm,
      justifyContent: 'center',
      width: '100%',
    },
    title: {
      color: theme.accent,
      fontWeight: 'bold',
    },
    defaultBackground: {
      backgroundColor: theme.primary,
    },
    pressedBackground: {
      backgroundColor: theme.secondary,
    },
  });

export default styleSheet;
