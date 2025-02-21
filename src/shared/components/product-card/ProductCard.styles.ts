import {ThemeColors} from '@/src/shared/types/theme.types';
import {StyleSheet} from 'react-native';
import {BaseColors, Spaces} from '../../styles/theme';

const styleSheet = (theme: ThemeColors) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      width: '100%',
      padding: Spaces.sm,
      borderRadius: 8,
      backgroundColor: theme.background,
      borderWidth: 1,
      borderColor: theme.border,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    image: {
      width: 80,
      height: 80,
      borderRadius: 8,
      backgroundColor: theme.background,
    },
    infoContainer: {
      flex: 1,
      marginLeft: Spaces.sm,
    },
    productName: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: Spaces.xs,
      color: theme.primary,
    },
    specsRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: Spaces.xs,
    },
    specsKey: {
      fontWeight: 'bold',
      color: BaseColors.grey500,
    },
    specsValue: {
      color: theme.primary,
      fontWeight: 'bold',
    },
    actionsContainer: {
      marginTop: Spaces.sm,
    },
    actionButton: {
      width: '100%',
      paddingVertical: 16,
      borderRadius: 6,
      alignItems: 'center',
      marginBottom: Spaces.xs,
    },
    blockButton: {
      backgroundColor: BaseColors.orange,
    },
    sellButton: {
      backgroundColor: BaseColors.green,
    },
    actionText: {
      color: BaseColors.white,
      fontWeight: 'bold',
    },
  });

export default styleSheet;
