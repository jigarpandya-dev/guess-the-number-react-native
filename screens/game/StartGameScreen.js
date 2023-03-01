import {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Alert} from 'react-native';
import PrimaryButton from '../../components/PrimaryButton';
import Colors from '../../utils/Colors';

function StartGameScreen({numberHandler}) {
  const defaultText = '';
  const [text, setText] = useState(defaultText);
  const primaryButtonHandler = () => {
    console.log('reset button click....');
  };

  const validate = () => {
    const enteredNo = parseInt(text);
    if (isNaN(enteredNo) || enteredNo < 1 || enteredNo > 99) {
      alert('the entered value is not a valid number...');
      return;
    } else {
      console.log(enteredNo);
      numberHandler(enteredNo);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Start Game</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          maxLength={2}
          value={text}
          onChangeText={setText}
          keyboardType="number-pad"
          selectionColor="beige"></TextInput>
        <View style={{flexDirection: 'row', margin: 16}}>
          <View style={{flex: 1}}>
            <PrimaryButton primaryButtonHandler={primaryButtonHandler}>
              RESET
            </PrimaryButton>
          </View>
          <View style={{flex: 1}}>
            <PrimaryButton primaryButtonHandler={validate}>
              CONFIRM
            </PrimaryButton>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'beige',
    flex: 1,
  },
  title: {
    padding: 8,
    borderColor: Colors.maroon,
    borderWidth: 2,
    borderRadius: 8,
    color: Colors.maroon,
    textAlign: 'center',
    margin: 16,
    fontSize: 24,
    fontFamily: 'cormorantgaramond_bold',
  },
  inputContainer: {
    backgroundColor: Colors.maroon,
    borderRadius: 8,
    margin: 16,
    alignItems: 'center',
  },
  input: {
    height: 45,
    width: 75,
    textAlign: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'beige',
    color: 'beige',
    fontSize: 32,
    fontFamily: 'cormorantgaramond_bold',
    margin: 16,
    padding: 8,
  },
});
export default StartGameScreen;
