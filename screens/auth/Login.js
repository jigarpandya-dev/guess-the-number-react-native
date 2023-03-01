import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {validateInput} from '../../core/validate';
import Colors from '../../utils/Colors';
import PrimaryButton from '../../components/PrimaryButton';
const VALUE_8 = 8;
const VALUE_16 = 16;

const Login = ({navigation}) => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const primaryButtonHandler = async () => {
    //navigation.navigate('BottomTabs');
    const response = await validateInput(credentials);
    console.log('response ' + response);
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>First App</Text>
        <Text style={[{alignSelf: 'center', marginTop: VALUE_8}, styles.label]}>
          Welcome to my first react-native app !!
        </Text>
      </View>
      <View style={{flex: 2}}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          onChangeText={text =>
            setCredentials({
              email: text,
              password: credentials.password,
            })
          }
          value={credentials.email}
          selectionColor="brown"
          style={styles.input}></TextInput>
        <Text style={styles.label}>Password</Text>
        <TextInput
          onChangeText={text =>
            setCredentials({
              email: credentials.email,
              password: text,
            })
          }
          value={credentials.password}
          selectionColor="brown"
          style={styles.input}></TextInput>
        <PrimaryButton
          primaryButtonHandler={primaryButtonHandler}
          navigation={navigation}>
          Login
        </PrimaryButton>
        <Text
          style={[{margin: VALUE_8, alignSelf: 'flex-end'}, styles.label]}
          onPress={() => navigation.navigate('ForgotPassword')}>
          Forgot Password?
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: 'beige',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  logoText: {
    color: Colors.maroon,
    alignSelf: 'center',
    fontFamily: 'cormorantgaramond_bold',
    fontSize: 36,
  },
  input: {
    borderRadius: 8,
    borderWidth: 2,
    padding: VALUE_8,
    borderColor: Colors.maroon,
    color: 'brown',
    fontSize: VALUE_16,
    fontFamily: 'cormorantgaramond_bold',
    margin: VALUE_8,
  },
  label: {
    marginStart: 8,
    color: Colors.maroon,
    fontSize: VALUE_16,
    fontFamily: 'cormorantgaramond_bold',
  },
});

export default Login;
