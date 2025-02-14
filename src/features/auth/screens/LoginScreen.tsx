import React from 'react';
import {
  ColorSchemeName,
  Image,
  Text,
  useColorScheme,
  View,
  ActivityIndicator,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import {ThemedInput} from '@/src/shared/components/themed-input/ThemedInput';
import {ThemedButton} from '@/src/shared/components/themed-button/ThemedButton';

import useStyle from '@/src/shared/hooks/use-style';
import ScreenContainer from '@/src/shared/components/screen-container/ScreenContainer';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/src/shared/components/card/Card';
import useLogin from '@/src/hooks/useLogin';
import styleSheet from './LoginScreen.styles';

const logoLight = require('../../../assets/images/logo-no-bg-light.png');
const logoDark = require('../../../assets/images/logo-no-bg-dark.png');

const loginSchema = z.object({
  email: z.string().email({message: 'Invalid email address'}),
  password: z
    .string()
    .min(6, {message: 'Password must be at least 6 characters long'}),
});

type LoginFormInputs = z.infer<typeof loginSchema>;

export const LoginScreen = () => {
  const colorScheme: ColorSchemeName = useColorScheme();
  const styles = useStyle(styleSheet);
  const {signin, isPending, error} = useLogin();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormInputs) => {
    signin(data.email, data.password);
  };

  return (
    <ScreenContainer>
      <View style={styles.container}>
        <Image
          source={colorScheme === 'light' ? logoLight : logoDark}
          style={styles.logo}
        />
        <Card>
          <CardHeader>
            <Text style={styles.title}>Se connecter</Text>
          </CardHeader>
          <CardContent>
            <Controller
              control={control}
              name="email"
              render={({field: {onChange, onBlur, value}}) => (
                <>
                  <ThemedInput
                    placeholder="Email"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                  {errors.email && (
                    <Text style={styles.errorText}>{errors.email.message}</Text>
                  )}
                </>
              )}
            />
            <Controller
              control={control}
              name="password"
              render={({field: {onChange, onBlur, value}}) => (
                <>
                  <ThemedInput
                    placeholder="Mot de passe"
                    secureTextEntry
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                  {errors.password && (
                    <Text style={styles.errorText}>
                      {errors.password.message}
                    </Text>
                  )}
                </>
              )}
            />
            {error && <Text style={styles.errorText}>{error}</Text>}
            {isPending && <ActivityIndicator size="large" />}
          </CardContent>
          <CardFooter>
            <ThemedButton
              title="Se connecter"
              onPress={handleSubmit(onSubmit)}
            />
          </CardFooter>
        </Card>
      </View>
    </ScreenContainer>
  );
};
