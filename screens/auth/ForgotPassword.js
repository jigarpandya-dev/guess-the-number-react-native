import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Colors from '../../utils/Colors';

var SharedPreferences = require('react-native-shared-preferences');

const VALUE_8 = 8;
const VALUE_16 = 16;

const ForgotPassword = () => {
  // SharedPreferences.getItem('user', function (value) {
  //   console.log('The current logged in user is ' + value);
  // });

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Forgot Password ?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'beige',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    marginStart: 8,
    color: Colors.maroon,
    fontSize: VALUE_16,
    fontFamily: 'cormorantgaramond_bold',
  },
});

export default ForgotPassword;
