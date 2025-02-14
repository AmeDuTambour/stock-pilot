import React, {useMemo, forwardRef, useImperativeHandle, useRef} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';

type Props = {
  data: string | null;
};

const BottomSheetActions = forwardRef<BottomSheet, Props>(({data}, ref) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  useImperativeHandle(ref, () => bottomSheetRef.current as BottomSheet);

  return (
    <BottomSheet ref={bottomSheetRef} index={-1} snapPoints={snapPoints}>
      <BottomSheetView style={styles.contentContainer}>
        <Text style={styles.title}>Produit scanné</Text>
        <Text>{data ?? 'Aucune donnée'}</Text>
        <TouchableOpacity
          onPress={() => bottomSheetRef.current?.close()}
          style={styles.button}>
          <Text style={styles.buttonText}>Fermer</Text>
        </TouchableOpacity>
      </BottomSheetView>
    </BottomSheet>
  );
});

export default BottomSheetActions;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    marginTop: 10,
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
