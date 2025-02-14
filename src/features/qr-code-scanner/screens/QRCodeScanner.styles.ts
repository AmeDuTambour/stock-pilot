import {BaseColors, Radius, Spaces} from '@/src/shared/styles/theme';
import {ThemeColors} from '@/src/shared/types/theme.types';
import {StyleSheet} from 'react-native';

const styleSheet = (theme: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.background,
    },
    camera: {
      width: '100%',
      height: '100%',
      borderRadius: Radius.md,
    },
    loadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.background,
    },
    errorContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: Spaces.lg,
      backgroundColor: theme.background,
    },
    errorText: {
      color: theme.destructive,
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: Spaces.md,
    },
    flashToggle: {
      position: 'absolute',
      bottom: Spaces.xl,
      backgroundColor: theme.primary,
      paddingVertical: Spaces.sm,
      paddingHorizontal: Spaces.lg,
      borderRadius: Radius.md,
      color: BaseColors.white,
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });

export default styleSheet;
