import React from 'react';
import {StatusBar, View, ActivityIndicator, Image} from 'react-native';
import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {MenuProvider} from 'react-native-popup-menu';

import {useTheme} from './shared/hooks/use-theme';
import {AuthProvider} from './shared/context/authContext';
import {LoginScreen} from './features/auth/screens/LoginScreen';
import QRCodeScannerScreen from './features/qr-code-scanner/screens/QRCodeScanner';
import InventoryScreen from './features/inventory/screens/InventoryScreen';

import {Spaces} from './shared/styles/theme';
import {FilterDrawer} from './shared/components/filter-drawer/FilterDrawer';
import {useAuth} from './shared/hooks/use-auth';

export const navigationRef = createNavigationContainerRef();

type AuthStackParamList = {
  Login: undefined;
};

type AppStackParamList = {
  Inventory: undefined;
  QRCodeScanner: undefined;
};

type RootDrawerParamList = {
  Main: undefined;
  Filters: undefined;
};

const queryClient = new QueryClient();

const AuthStack = createNativeStackNavigator<AuthStackParamList>();
const Tab = createBottomTabNavigator<AppStackParamList>();
const Drawer = createDrawerNavigator<RootDrawerParamList>();

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

function BottomTabNavigator() {
  const theme = useTheme();

  const icons = {
    Inventory: require('./assets/icons/inventory.png'),
    QRCodeScanner: require('./assets/icons/qr-code.png'),
  };

  return (
    <Tab.Navigator
      initialRouteName="QRCodeScanner"
      screenOptions={({route}) => ({
        headerStyle: {
          backgroundColor: theme.background,
          height: Spaces['4xl'] * 2,
        },
        headerTintColor: theme.primary,
        tabBarActiveTintColor: theme.primary,
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: theme.background,
          height: 80,
          paddingTop: 15,
        },
        tabBarShowLabel: false,
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

function AppNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={props => <FilterDrawer {...props} />}
      screenOptions={{
        drawerPosition: 'right',
        drawerType: 'slide',
        headerShown: false,
        drawerStyle: {width: '75%'},
      }}>
      <Drawer.Screen name="Main" component={BottomTabNavigator} />
    </Drawer.Navigator>
  );
}

function MainApp() {
  const {isAuthenticated, isLoading} = useAuth();
  const theme = useTheme();

  if (isLoading) {
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
      <NavigationContainer ref={navigationRef}>
        {isAuthenticated ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </>
  );
}

export default function App() {
  return (
    <GestureHandlerRootView style={{flex: 1, backgroundColor: 'gray'}}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <MenuProvider>
            <MainApp />
          </MenuProvider>
        </AuthProvider>
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}
