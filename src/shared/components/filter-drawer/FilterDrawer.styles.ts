import {BaseColors, Radius, Spaces} from '@/src/shared/styles/theme';
import {ThemeColors} from '@/src/shared/types/theme.types';
import {StyleSheet} from 'react-native';

const styleSheet = (theme: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: Spaces.lg,
      backgroundColor: theme.background,
      paddingTop: Spaces['4xl'],
    },
    drawerTitle: {
      fontSize: Spaces.lg,
      fontWeight: 'bold',
      marginBottom: Spaces.md,
      color: theme.primary,
    },
    sectionTitle: {
      fontSize: Spaces.md,
      fontWeight: 'bold',
      marginTop: Spaces.md,
      marginBottom: Spaces.sm,
      color: theme.primary,
    },
    optionButton: {
      paddingVertical: Spaces.md,
      borderRadius: Radius.md,
      alignItems: 'center',
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: BaseColors.grey500,
      marginBottom: Spaces.sm,
    },
    optionSelected: {
      backgroundColor: theme.secondary,
      borderWidth: 0,
    },
    optionText: {
      fontSize: Spaces.md,
      color: BaseColors.grey500,
    },
    optionTextSelected: {
      color: theme.primary,
      fontWeight: 'bold',
    },
  });

export default styleSheet;
