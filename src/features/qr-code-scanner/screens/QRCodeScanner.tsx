import React, {useEffect, useState, useRef, useCallback} from 'react';
import {View, Text, Vibration, ActivityIndicator, Platform} from 'react-native';
import {
  Camera as RNVCamera,
  useCameraDevice,
  useCameraPermission,
  useCodeScanner,
  Code,
} from 'react-native-vision-camera';
import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import useStyle from '@/src/shared/hooks/use-style';
import styleSheet from './QRCodeScanner.styles';
import BottomSheetActions from '@/src/shared/components/bottom-sheet-actions/BottomSheetActions';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {BottomSheetMethods} from '@gorhom/bottom-sheet/lib/typescript/types';

const QRCodeScannerScreen = () => {
  const styles = useStyle(styleSheet);
  const [torch, setTorch] = useState<'on' | 'off'>('off');
  const [scannedData, setScannedData] = useState('');
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const bottomSheetRef = useRef<BottomSheetMethods>(null);

  const {hasPermission, requestPermission} = useCameraPermission();

  useEffect(() => {
    const checkCameraPermission = async () => {
      const permission =
        Platform.OS === 'ios'
          ? PERMISSIONS.IOS.CAMERA
          : PERMISSIONS.ANDROID.CAMERA;

      const status = await check(permission);
      if (status !== RESULTS.GRANTED) {
        const requestStatus = await request(permission);
        if (requestStatus !== RESULTS.GRANTED) {
          console.warn('Camera permission not granted');
        }
      }
    };

    if (!hasPermission) {
      requestPermission().catch(console.warn);
    }

    checkCameraPermission();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const device = useCameraDevice('back');

  const codeScanner = useCodeScanner({
    codeTypes: ['qr'],
    onCodeScanned: (codes: Code[]) => {
      if (codes[0].value && codes.length > 0) {
        Vibration.vibrate();
        setScannedData(codes[0].value);
        bottomSheetRef.current?.snapToIndex(0);
      }
    },
  });

  const handleBottomSheetChange = useCallback((index: number) => {
    setIsBottomSheetOpen(index >= 0);
  }, []);

  const toggleTorch = useCallback(() => {
    setTorch(prev => (prev === 'off' ? 'on' : 'off'));
  }, []);

  if (hasPermission === null || !device) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="blue" />
        <Text>Loading camera...</Text>
      </View>
    );
  }

  if (!hasPermission) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Camera permission is required!</Text>
        <Text style={styles.errorText}>Please enable it in your settings.</Text>
      </View>
    );
  }

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <View style={styles.container}>
        <RNVCamera
          device={device}
          style={styles.camera}
          isActive={!isBottomSheetOpen}
          torch={torch}
          codeScanner={codeScanner}
        />
        <Text onPress={toggleTorch} style={styles.flashToggle}>
          {torch === 'off' ? 'Turn On Flash' : 'Turn Off Flash'}
        </Text>
        <BottomSheetActions
          ref={bottomSheetRef}
          codeIdentifier={scannedData}
          onChange={handleBottomSheetChange}
        />
      </View>
    </GestureHandlerRootView>
  );
};

export default QRCodeScannerScreen;
