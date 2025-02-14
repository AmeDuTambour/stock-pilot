import React, {ReactNode} from 'react';
import {
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
  View,
} from 'react-native';
import useStyle from '../../hooks/use-style';
import styleSheet from './ScreenContainer.styles';

const ScreenContainer = ({
  children,
  scrollEnabled = false,
}: {
  children: ReactNode;
  scrollEnabled?: boolean;
}) => {
  const styles = useStyle(styleSheet);
  return (
    <SafeAreaView style={styles.safeArea}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        {scrollEnabled ? (
          <ScrollView
            contentContainerStyle={styles.scrollView}
            keyboardShouldPersistTaps="handled">
            <View style={styles.container}>{children}</View>
          </ScrollView>
        ) : (
          <View style={styles.container}>{children}</View>
        )}
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default ScreenContainer;
