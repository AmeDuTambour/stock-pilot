import {ThemeColors} from '@/src/shared/types/theme.types';
import {StyleSheet} from 'react-native';
import {BaseColors, Radius, Spaces} from '../../styles/theme';

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

    reserveContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      marginBottom: Spaces.xs,
    },
    reserveButton: {
      width: 40,
      height: 40,
      borderRadius: Radius.xs,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: BaseColors.orange,
    },
    reserveText: {
      color: BaseColors.white,
      fontSize: 20,
      fontWeight: 'bold',
    },
    reserveTitle: {
      flex: 1,
      textAlign: 'center',
      color: theme.primary,
      fontWeight: 'bold',
    },
    decrementButton: {
      marginRight: Spaces.xs,
    },
    incrementButton: {
      marginLeft: Spaces.xs,
    },
  });

export default styleSheet;
