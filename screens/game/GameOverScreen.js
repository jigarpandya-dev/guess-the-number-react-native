import {View, Text} from 'react-native';
import Colors from '../../utils/Colors';
import PrimaryButton from '../../components/PrimaryButton';

const GameOverScreen = ({totalGuess, reStartGameHandler}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'beige',
      }}>
      <Text
        style={{
          color: Colors.maroon,
          fontSize: 20,
          margin: 16,
          fontFamily: 'cormorantgaramond_bold',
        }}>
        Game Over with {totalGuess} guesses
      </Text>
      <PrimaryButton primaryButtonHandler={reStartGameHandler}>
        Start Over
      </PrimaryButton>
    </View>
  );
};

export default GameOverScreen;
