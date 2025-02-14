import EncryptedStorage from 'react-native-encrypted-storage';

export const storeToken = async (token: string) => {
  try {
    await EncryptedStorage.setItem('auth_token', token);
  } catch (error) {
    console.error('Error storing the token', error);
  }
};

export const getToken = async () => {
  try {
    const token = await EncryptedStorage.getItem('auth_token');
    return token;
  } catch (error) {
    console.error('Error retrieving the token', error);
    return null;
  }
};

export const removeToken = async () => {
  try {
    await EncryptedStorage.removeItem('auth_token');
  } catch (error) {
    console.error('Error removing the token', error);
  }
};
