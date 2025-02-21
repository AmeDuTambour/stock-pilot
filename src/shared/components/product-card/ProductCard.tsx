import React from 'react';
import {Image, Text, View, TouchableOpacity, Alert} from 'react-native';
import {Product} from '../../types/product.types';
import styleSheet from './ProductCard.styles';
import useStyle from '../../hooks/use-style';

type ProductCardProps = {
  product?: Product | null;
  onBlock?: () => void;
  onSell?: () => void;
};

const ProductCard = ({product, onBlock, onSell}: ProductCardProps) => {
  const styles = useStyle(styleSheet);

  if (!product) {
    return (
      <View style={styles.container}>
        <Text style={styles.productName}>Donnée indisponible</Text>
      </View>
    );
  }

  const handleSellPress = () => {
    Alert.alert(
      'Confirmer la vente',
      `Voulez-vous vraiment marquer "${
        product.name || 'ce produit'
      }" comme vendu ?`,
      [
        {text: 'Annuler', style: 'cancel'},
        {text: 'Confirmer', onPress: () => onSell && onSell()},
      ],
    );
  };

  return (
    <View style={styles.container}>
      <Image
        source={product.images?.length ? {uri: product.images[0]} : undefined}
        style={styles.image}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.productName}>
          {product.name || 'Nom indisponible'}
        </Text>
        <View style={styles.specsRow}>
          <Text style={styles.specsKey}>Stock :</Text>
          <Text style={styles.specsValue}>{product.stock ?? 'Inconnu'}</Text>
        </View>
        <View style={styles.specsRow}>
          <Text style={styles.specsKey}>Bloqué :</Text>
          <Text style={styles.specsValue}>{product.blockedQuantity ?? 0}</Text>
        </View>

        <View style={styles.actionsContainer}>
          <TouchableOpacity
            onPress={onBlock}
            style={[styles.actionButton, styles.blockButton]}
            disabled={product.stock === 0}>
            <Text style={styles.actionText}>Réserver une unité</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleSellPress}
            style={[styles.actionButton, styles.sellButton]}
            disabled={product.stock === 0}>
            <Text style={styles.actionText}>Déclarer une unité vendue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductCard;
