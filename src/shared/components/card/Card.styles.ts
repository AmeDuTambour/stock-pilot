import {StyleSheet} from 'react-native';
import {ThemeColors} from '../../types/theme.types';
import {BaseColors} from '../../styles/theme';

const styleSheet = (theme: ThemeColors) =>
  StyleSheet.create({
    block: {
      borderWidth: 1,
      borderColor: BaseColors.grey300,
      borderRadius: 8,
      padding: 16,
      backgroundColor: theme.background,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    header: {
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
      paddingBottom: 8,
      marginBottom: 8,
      display: 'flex',
      alignItems: 'center',
    },
    content: {
      paddingVertical: 8,
    },
    footer: {
      borderTopWidth: 1,
      borderTopColor: '#ddd',
      paddingTop: 8,
      marginTop: 8,
    },
  });

export default styleSheet;
