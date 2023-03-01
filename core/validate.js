import {ToastAndroid} from 'react-native';
import {signinUser, createUser} from './network';

export async function validateInput(credentials) {
  if (credentials.email.length == 0 || credentials.password.length == 0) {
    ToastAndroid.showWithGravity(
      'Email or password is empty',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  } else {
    const response = await createUser(credentials.email, credentials.password);
    return JSON.stringify(response);
  }
}
