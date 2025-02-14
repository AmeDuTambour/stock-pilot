import React from 'react';
import {
  StatusBar,
  Image,
  useColorScheme,
  View,
  Text,
  ActivityIndicator,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {useTheme} from './shared/hooks/use-theme';

import {useAuth} from './shared/hooks/use-auth';
import {AuthProvider} from './shared/context/authContext';
import {LoginScreen} from './features/auth/screens/LoginScreen';
import QRCodeScannerScreen from './features/qr-code-scanner/screens/QRCodeScanner';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import InventoryScreen from './features/inventory/screens/InventoryScreen';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

type AuthStackParamList = {
  Login: undefined;
};

type AppStackParamList = {
  Inventory: undefined;
  QRCodeScanner: undefined;
};

const AuthStack = createNativeStackNavigator<AuthStackParamList>();
const Tab = createBottomTabNavigator<AppStackParamList>();

function AuthNavigator() {
  const theme = useTheme();
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {backgroundColor: theme.background},
      }}>
      <AuthStack.Screen name="Login" component={LoginScreen} />
    </AuthStack.Navigator>
  );
}

function AppNavigator() {
  const theme = useTheme();

  const icons = {
    Inventory: require('./assets/icons/inventory.png'),
    QRCodeScanner: require('./assets/icons/qr-code.png'),
  };

  return (
    <Tab.Navigator
      initialRouteName="QRCodeScanner"
      screenOptions={({route}) => ({
        headerStyle: {backgroundColor: theme.background},
        headerTintColor: theme.primary,
        tabBarActiveTintColor: theme.primary,
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: theme.background,
          height: 80,
          paddingTop: 15,
        },
        tabBarShowLabel: false,
        tabBarIconStyle: {alignSelf: 'center'},
        tabBarIcon: ({color, size}) => (
          <Image
            source={icons[route.name]}
            style={{
              width: size,
              height: size,
              tintColor: color,
              resizeMode: 'contain',
            }}
          />
        ),
      })}>
      <Tab.Screen name="Inventory" component={InventoryScreen} />
      <Tab.Screen name="QRCodeScanner" component={QRCodeScannerScreen} />
    </Tab.Navigator>
  );
}

function MainApp() {
  const {isAuthenticated} = useAuth();
  const theme = useTheme();

  if (isAuthenticated === null) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: theme.background,
        }}>
        <ActivityIndicator size="large" color={theme.primary} />
      </View>
    );
  }

  return (
    <>
      <StatusBar backgroundColor={theme.primary} />
      <NavigationContainer>
        {isAuthenticated ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </>
  );
}

export default function App() {
  return (
    <GestureHandlerRootView style={{flex: 1, backgroundColor: 'gray'}}>
      <AuthProvider>
        <MainApp />
      </AuthProvider>
    </GestureHandlerRootView>
  );
}
