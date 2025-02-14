import {Radius, Spaces} from '@/src/shared/styles/theme';
import {ThemeColors} from '@/src/shared/types/theme.types';
import {StyleSheet} from 'react-native';

const styleSheet = (theme: ThemeColors) =>
  StyleSheet.create({
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: theme.primary,
      borderRadius: Radius.xs,
      backgroundColor: theme.card,
      height: Spaces['4xl'],
      width: Spaces['4xl'] * 4.5,
      paddingHorizontal: Spaces.md,
      marginVertical: Spaces.sm,
    },
    input: {
      flex: 1,
      color: theme.primary,
    },
  });

export default styleSheet;
