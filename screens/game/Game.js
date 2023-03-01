import {View} from 'react-native';
import {useState} from 'react';
import StartGameScreen from './StartGameScreen';
import GuessNumberScreen from './GuessNumberScreen';
import GameOverScreen from './GameOverScreen';

function Game({navigation}) {
  const [number, setNumber] = useState(0);
  const [totalGuess, setTotalGuess] = useState(0);
  const numberHandler = number => {
    setNumber(number);
  };

  const gameOverHandler = totalGuess => {
    setNumber(-1);
    setTotalGuess(totalGuess);
  };

  const reStartGameHandler = () => {
    setNumber(0);
    setTotalGuess(0);
  };

  let screen = (
    <StartGameScreen numberHandler={numberHandler}></StartGameScreen>
  );

  if (number == -1)
    screen = (
      <GameOverScreen
        totalGuess={totalGuess}
        reStartGameHandler={reStartGameHandler}></GameOverScreen>
    );
  else if (number != 0)
    screen = (
      <GuessNumberScreen
        enteredNumber={number}
        onGameOver={gameOverHandler}></GuessNumberScreen>
    );

  return <View style={{flex: 1}}>{screen}</View>;
}

export default Game;
