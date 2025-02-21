import {ThemeColors} from '@/src/shared/types/theme.types';
import {StyleSheet} from 'react-native';

const styleSheet = (theme: ThemeColors) =>
  StyleSheet.create({
    contentContainer: {
      flex: 1,
      padding: 20,
      alignItems: 'center',
      backgroundColor: theme.background,
    },
    handleStyle: {
      backgroundColor: theme.background,
      borderRadius: 10,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    button: {
      marginTop: 10,
      padding: 10,
      backgroundColor: 'blue',
      borderRadius: 5,
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
    },
  });

export default styleSheet;
