import React, {
  useMemo,
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
} from 'react';
import {ActivityIndicator} from 'react-native';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import useGetProduct from '@/src/hooks/useGetProduct';
import ProductCard from '../product-card/ProductCard';
import styleSheet from './BottomSheetActions.styles';
import useStyle from '../../hooks/use-style';

type Props = {
  codeIdentifier: string | null;
  onChange?: (index: number) => void;
};

const BottomSheetActions = forwardRef<BottomSheet, Props>(
  ({codeIdentifier, onChange}, ref) => {
    const bottomSheetRef = useRef<BottomSheet>(null);
    const snapPoints = useMemo(() => ['45%'], []);
    const styles = useStyle(styleSheet);

    const {data: product, isLoading} = useGetProduct(codeIdentifier ?? '');

    useImperativeHandle(ref, () => bottomSheetRef.current as BottomSheet);

    useEffect(() => {
      if (
        codeIdentifier &&
        codeIdentifier.trim() !== '' &&
        bottomSheetRef.current
      ) {
        bottomSheetRef.current.expand();
      }
    }, [codeIdentifier]);

    return (
      <BottomSheet
        handleStyle={styles.handleStyle}
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        onChange={onChange}>
        <BottomSheetView style={styles.contentContainer}>
          {isLoading ? (
            <ActivityIndicator size="large" />
          ) : (
            <ProductCard product={product ?? undefined} />
          )}
        </BottomSheetView>
      </BottomSheet>
    );
  },
);

export default BottomSheetActions;
