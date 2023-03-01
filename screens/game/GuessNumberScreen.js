import {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import PrimaryButton from '../../components/PrimaryButton';
import Colors from '../../utils/Colors';

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

function GuessNumberScreen({enteredNumber, onGameOver}) {
  const initialVal = generateRandomBetween(1, 100, enteredNumber);
  const [guessedNumber, setGuessedNumber] = useState(initialVal);
  const [guessedNumberList, setGuessedNumberList] = useState([initialVal]);

  useEffect(() => {
    if (guessedNumber === enteredNumber) {
      onGameOver(guessedNumberList.length);
    }
  }, [guessedNumber, enteredNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  const guessLesserNumber = () => {
    if (guessedNumber < enteredNumber) alert('Incorrect guess');
    else {
      maxBoundary = guessedNumber;
      const newGuess = generateRandomBetween(
        minBoundary,
        maxBoundary,
        guessedNumber,
      );
      setGuessedNumber(newGuess);
      setGuessedNumberList([...guessedNumberList, newGuess]);
    }
  };

  const guessGreaterNumber = () => {
    if (guessedNumber > enteredNumber) alert('Incorrect guess');
    else {
      minBoundary = guessedNumber + 1;
      const newGuess = generateRandomBetween(
        minBoundary,
        maxBoundary,
        guessedNumber,
      );
      setGuessedNumber(newGuess);
      setGuessedNumberList([...guessedNumberList, newGuess]);
    }
  };

  const renderItem = ({item}) => <Text style={styles.listItem}>{item}</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Guess Number</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.input}>{guessedNumber}</Text>
        <View style={{flexDirection: 'row', margin: 16}}>
          <View style={{flex: 1}}>
            <PrimaryButton primaryButtonHandler={guessLesserNumber}>
              LESSER
            </PrimaryButton>
          </View>
          <View style={{flex: 1}}>
            <PrimaryButton primaryButtonHandler={guessGreaterNumber}>
              GREATER
            </PrimaryButton>
          </View>
        </View>
      </View>
      <FlatList data={guessedNumberList} renderItem={renderItem} />
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
    textAlign: 'center',
    color: 'beige',
    fontSize: 32,
    fontFamily: 'cormorantgaramond_bold',
    margin: 16,
    padding: 8,
  },
  listItem: {
    marginTop: 16,
    textAlign: 'center',
    backgroundColor: Colors.maroon,
    color: 'white',
    fontFamily: 'cormorantgaramond_bold',
    fontSize: 20,
    padding: 8,
    width: '80%',
    alignSelf: 'center',
  },
});

export default GuessNumberScreen;
