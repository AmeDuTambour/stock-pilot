import React, {useState, useEffect, useCallback} from 'react';
import {SearchHeader} from '@/src/shared/components/search-header/SearchHeader';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  ActivityIndicator,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import useStyle from '@/src/shared/hooks/use-style';
import styleSheet from './InventoryScreen.styles';
import {useProducts} from '@/src/hooks/useProducts';
import ProductCard from '@/src/shared/components/product-card/ProductCard';

type RootDrawerParamList = {
  Main: undefined;
  Filters: undefined;
};

const InventoryScreen = () => {
  const navigation = useNavigation<DrawerNavigationProp<RootDrawerParamList>>();
  const styles = useStyle(styleSheet);

  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([]);

  const {data, isLoading, error} = useProducts({
    blocked: false,
    category: '',
    page,
    limit: 10,
    query: searchQuery,
  });

  useEffect(() => {
    if (data?.data && Array.isArray(data.data)) {
      setProducts(prev => (page === 1 ? data.data : [...prev, ...data.data]));
    }
  }, [data, page]);

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
    navigation.setOptions({headerTitle: HeaderComponent});
  }, [navigation, HeaderComponent]);

  // Fonction de chargement de la page suivante
  const loadMore = () => {
    if (!isLoading) {
      setPage(prev => prev + 1);
    }
  };

  return (
    <View style={styles.container}>
      {isLoading && page === 1 && <Text>Chargement...</Text>}
      {error && <Text>Erreur de chargement</Text>}

      <FlatList
        data={products}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.cardContainer}>
            <ProductCard product={item} />
          </View>
        )}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          isLoading && page > 1 ? <ActivityIndicator size="large" /> : null
        }
      />
    </View>
  );
};

export default InventoryScreen;
