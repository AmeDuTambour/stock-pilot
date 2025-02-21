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
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: Spaces.sm,
    },
    actionButton: {
      flex: 1,
      paddingVertical: 8,
      borderRadius: 6,
      alignItems: 'center',
      marginHorizontal: Spaces.xs,
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
