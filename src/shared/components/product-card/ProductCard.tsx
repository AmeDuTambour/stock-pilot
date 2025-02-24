import React from 'react';
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {Product} from '../../types/product.types';
import styleSheet from './ProductCard.styles';
import useStyle from '../../hooks/use-style';
import {useBlockProductUnit} from '@/src/hooks/useBlockProductUnit';
import {useDeclareSale} from '@/src/hooks/useDeclareSale';
import {useReleaseProductUnit} from '@/src/hooks/useReleaseProductUnit';

type ProductCardProps = {
  product?: Product | null;
};

const ProductCard = ({product}: ProductCardProps) => {
  const styles = useStyle(styleSheet);

  const {mutate: blockUnit, isPending: isBlocking} = useBlockProductUnit();
  const {mutate: releaseUnit, isPending: isReleasing} = useReleaseProductUnit();
  const {mutate: declareSaleMutation, isPending: isDeclaring} =
    useDeclareSale();

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
        {
          text: 'Vendre une unité réservée',
          onPress: () => {
            declareSaleMutation({
              identifier: product.id,
              quantity: 1,
              useReservation: true,
            });
          },
        },
        {
          text: 'Vendre une unité en stock',
          onPress: () => {
            declareSaleMutation({
              identifier: product.id,
              quantity: 1,
              useReservation: false,
            });
          },
        },
        {text: 'Annuler', style: 'cancel'},
      ],
    );
  };

  const handleDecrement = () => {
    releaseUnit({identifier: product.id, quantity: 1});
  };

  const handleIncrement = () => {
    blockUnit({identifier: product.id, quantity: 1});
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
          <Text style={styles.specsKey}>Réservé :</Text>
          <Text style={styles.specsValue}>{product.blockedQuantity ?? 0}</Text>
        </View>

        <View style={styles.reserveContainer}>
          <TouchableOpacity
            onPress={handleDecrement}
            style={[styles.reserveButton, styles.decrementButton]}
            disabled={isReleasing || (product.blockedQuantity ?? 0) <= 0}>
            {isReleasing ? (
              <ActivityIndicator color="white" />
            ) : (
              <Text style={styles.reserveText}>-</Text>
            )}
          </TouchableOpacity>
          <Text style={styles.reserveTitle}>Reserver Unité(s)</Text>
          <TouchableOpacity
            onPress={handleIncrement}
            style={[styles.reserveButton, styles.incrementButton]}
            disabled={isBlocking || (product.stock ?? 0) <= 0}>
            {isBlocking ? (
              <ActivityIndicator color="white" />
            ) : (
              <Text style={styles.reserveText}>+</Text>
            )}
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={handleSellPress}
          style={[styles.actionButton, styles.sellButton]}
          disabled={isDeclaring || (product.stock ?? 0) === 0}>
          {isDeclaring ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text style={styles.actionText}>Declarer une vente</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductCard;
