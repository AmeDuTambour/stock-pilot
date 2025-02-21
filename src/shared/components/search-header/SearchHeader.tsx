import React from 'react';
import {TextInput, View, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import useStyle from '../../hooks/use-style';
import styleSheet from './SearchHeader.styles';
import {BaseColors} from '../../styles/theme';

type SearchHeaderProps = {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
};

export const SearchHeader = ({
  searchQuery,
  setSearchQuery,
}: SearchHeaderProps) => {
  const styles = useStyle(styleSheet);
  const navigation =
    useNavigation<
      DrawerNavigationProp<{Main: undefined; Filters: undefined}>
    >();

  return (
    <View style={styles.headerContainer}>
      <TextInput
        placeholder="Rechercher..."
        value={searchQuery}
        onChangeText={setSearchQuery}
        style={styles.searchInput}
        placeholderTextColor={BaseColors.grey500}
      />
    </View>
  );
};
