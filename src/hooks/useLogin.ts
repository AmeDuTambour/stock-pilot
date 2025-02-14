import {useState} from 'react';
import {login} from '../api/authService';
import getErrorMessage from '../shared/utils/errorHandler';
import {storeToken} from '../shared/utils/tokenStorage';
import {useAuth} from '../shared/hooks/use-auth';

const useLogin = () => {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const {signin: authenticateUser} = useAuth();

  const signin = async (email: string, password: string) => {
    setIsPending(true);
    setError(null);
    try {
      const result = await login(email, password);
      console.log('===============response from useLogin=====================');
      console.log(result);
      console.log('====================================');

      if (result.token) {
        await storeToken(result.token);
        authenticateUser(result.token);
      }
    } catch (err) {
      const errorMessage = getErrorMessage(err);
      setError(errorMessage);
    } finally {
      setIsPending(false);
    }
  };

  return {signin, isPending, error};
};

export default useLogin;
