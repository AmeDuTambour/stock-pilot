import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {DrawerContentComponentProps} from '@react-navigation/drawer';
import useStyle from '../../hooks/use-style';
import styleSheet from './FilterDrawer.styles';
import {useProducts} from '@/src/hooks/useProducts';

export const FilterDrawer = ({navigation}: DrawerContentComponentProps) => {
  const styles = useStyle(styleSheet);

  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedStatus, setSelectedStatus] = useState<'Tous' | 'Bloqués'>(
    'Tous',
  );

  const isBlocked = selectedStatus === 'Bloqués';

  const {refetch} = useProducts({
    blocked: isBlocked,
    category: selectedCategory,
    page: 1,
    limit: 10,
    query: '',
  });

  const applyFilters = (category: string, status: 'Tous' | 'Bloqués') => {
    setSelectedCategory(category ?? '');
    setSelectedStatus(status);
    refetch();
    navigation.closeDrawer();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.drawerTitle}>Filtres</Text>

      <Text style={styles.sectionTitle}>Statut</Text>
      {['Tous', 'Bloqués'].map(item => (
        <TouchableOpacity
          key={item}
          style={[
            styles.optionButton,
            selectedStatus === item && styles.optionSelected,
          ]}
          onPress={() =>
            applyFilters(selectedCategory, item as 'Tous' | 'Bloqués')
          }>
          <Text
            style={[
              styles.optionText,
              selectedStatus === item && styles.optionTextSelected,
            ]}>
            {item}
          </Text>
        </TouchableOpacity>
      ))}

      <Text style={styles.sectionTitle}>Catégories</Text>
      <TouchableOpacity
        style={[
          styles.optionButton,
          !selectedCategory && styles.optionSelected,
        ]}
        onPress={() => applyFilters('', selectedStatus)}>
        <Text
          style={[
            styles.optionText,
            selectedCategory === null && styles.optionTextSelected,
          ]}>
          Toutes
        </Text>
      </TouchableOpacity>
      {['Tambours', 'Autres'].map(category => (
        <TouchableOpacity
          key={category}
          style={[
            styles.optionButton,
            selectedCategory === category && styles.optionSelected,
          ]}
          onPress={() => applyFilters(category, selectedStatus)}>
          <Text
            style={[
              styles.optionText,
              selectedCategory === category && styles.optionTextSelected,
            ]}>
            {category}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
