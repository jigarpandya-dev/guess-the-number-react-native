import React, {useState} from 'react';

import {View, StyleSheet, TextInput, Button} from 'react-native';

const TodoTextInput = ({addItemHandler}) => {
  const [inputText, setInputText] = useState('');
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        onChangeText={text => {
          setInputText(text);
        }}
        value={inputText}
      />
      <Button
        title="Add Item"
        color="brown"
        onPress={() => {
          addItemHandler(inputText);
          setInputText('');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  input: {
    borderColor: 'brown',
    borderWidth: 1,
    borderRadius: 8,
    fontFamily: 'cormorantgaramond_bold',
    fontSize: 24,
    color: 'brown',
    width: '60%',
    paddingStart: 16,
  },
});

export default TodoTextInput;
