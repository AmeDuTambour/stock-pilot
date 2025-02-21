import {StyleSheet} from 'react-native';
import {Spaces, Radius} from '@/src/shared/styles/theme';
import {ThemeColors} from '@/src/shared/types/theme.types';

const styleSheet = (theme: ThemeColors) =>
  StyleSheet.create({
    headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      height: Spaces['3xl'],
      paddingHorizontal: Spaces.md,
      backgroundColor: theme.background,
    },
    filterButton: {
      width: 40,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: Spaces.md,
      alignSelf: 'center',
    },
    filterIcon: {
      width: 24,
      height: 24,
      resizeMode: 'contain',
      tintColor: theme.primary,
    },
  });

export default styleSheet;
