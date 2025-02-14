import {Spaces} from '@/src/shared/styles/theme';
import {ThemeColors} from '@/src/shared/types/theme.types';
import {StyleSheet} from 'react-native';

const styleSheet = (theme: ThemeColors) =>
  StyleSheet.create({
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: Spaces['4xl'],
    },
    logo: {
      width: 130,
      height: 130,
      marginBottom: Spaces['3xl'],
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: theme.primary,
      marginBottom: Spaces.sm,
    },
    buttonContainer: {
      top: Spaces.md,
    },
    errorText: {
      color: theme.destructive,
      marginTop: Spaces.xs,
    },
  });

export default styleSheet;
