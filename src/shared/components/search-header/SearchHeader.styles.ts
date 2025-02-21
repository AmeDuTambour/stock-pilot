import {BaseColors, Radius, Spaces} from '@/src/shared/styles/theme';
import {ThemeColors} from '@/src/shared/types/theme.types';
import {StyleSheet, Dimensions} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

const styleSheet = (theme: ThemeColors) =>
  StyleSheet.create({
    headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '80%',
      height: Spaces['3xl'],
      paddingHorizontal: Spaces.md,
      backgroundColor: theme.background,
    },
    searchInput: {
      flex: 1,
      height: Spaces['2xl'],
      backgroundColor: theme.secondary,
      borderWidth: 1,
      borderColor: theme.border,
      borderRadius: Radius.xs,
      paddingHorizontal: Spaces.md,
      color: theme.primary,
    },
    filterButton: {
      width: 40,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: Spaces.sm,
      borderRadius: Radius.md,
      backgroundColor: 'rgba(0,0,0,0.1)',
      position: 'absolute',
      right: Spaces.md,
      zIndex: 10,
    },
    filterIcon: {
      width: 24,
      height: 24,
      resizeMode: 'contain',
      tintColor: theme.primary,
    },
  });

export default styleSheet;
