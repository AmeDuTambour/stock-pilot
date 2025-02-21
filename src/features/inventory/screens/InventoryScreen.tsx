import React, {useState, useEffect, useCallback} from 'react';
import {SearchHeader} from '@/src/shared/components/search-header/SearchHeader';
import {Text, View, TouchableOpacity, Image, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import useStyle from '@/src/shared/hooks/use-style';
import styleSheet from './InventoryScreen.styles';
import {useProducts} from '@/src/hooks/useProducts';

type RootDrawerParamList = {
  Main: undefined;
  Filters: undefined;
};

const InventoryScreen = () => {
  const navigation = useNavigation<DrawerNavigationProp<RootDrawerParamList>>();
  const styles = useStyle(styleSheet);

  const [searchQuery, setSearchQuery] = useState('');

  const {data, isLoading, error} = useProducts({
    blocked: false,
    category: '',
    page: 1,
    limit: 10,
    query: searchQuery,
  });

  const HeaderComponent = useCallback(
    () => (
      <View style={styles.headerContainer}>
        <SearchHeader
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <TouchableOpacity
          onPress={() => navigation.openDrawer()}
          style={styles.filterButton}>
          <Image
            source={require('../../../assets/icons/filter.png')}
            style={styles.filterIcon}
          />
        </TouchableOpacity>
      </View>
    ),
    [searchQuery, styles, navigation],
  );

  useEffect(() => {
    navigation.setOptions({
      headerTitle: HeaderComponent,
    });
  }, [navigation, HeaderComponent]);

  return (
    <View style={{flex: 1, padding: 16}}>
      {isLoading && <Text>Chargement...</Text>}
      {error && <Text>Erreur de chargement</Text>}

      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <Text>{item.name}</Text>}
      />
    </View>
  );
};

export default InventoryScreen;
