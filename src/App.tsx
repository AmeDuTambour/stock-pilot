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
import {LoginScreen} from './auth/screens/LogingScreen';

const logoLight = require('./assets/images/logo-no-bg-light.png');
const logoDark = require('./assets/images/logo-no-bg-dark.png');

type AuthStackParamList = {
  Login: undefined;
};

type AppStackParamList = {
  Home: undefined;
};

const AuthStack = createNativeStackNavigator<AuthStackParamList>();
const AppStack = createNativeStackNavigator<AppStackParamList>();

function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Welcome to Home Screen!</Text>
    </View>
  );
}

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
  const colorScheme = useColorScheme();

  return (
    <AppStack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: theme.background},
        headerTintColor: theme.primary,
        headerTitle: () => (
          <Image
            source={colorScheme === 'light' ? logoLight : logoDark}
            style={{width: 100, height: 40, resizeMode: 'contain'}}
          />
        ),
        contentStyle: {backgroundColor: theme.background},
      }}>
      <AppStack.Screen name="Home" component={HomeScreen} />
    </AppStack.Navigator>
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
    <AuthProvider>
      <MainApp />
    </AuthProvider>
  );
}
