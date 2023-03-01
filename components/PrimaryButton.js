import {View, Text, Pressable, StyleSheet} from 'react-native';

function PrimaryButton({children, primaryButtonHandler}) {
  return (
    <View
      style={{
        borderRadius: 16,
        margin: 8,
        overflow: 'hidden',
      }}>
      <Pressable
        android_ripple={{color: 'brown'}}
        style={({pressed}) =>
          pressed
            ? [{opacity: 0.75}, styles.buttonContainer]
            : styles.buttonContainer
        }
        onPress={primaryButtonHandler}>
        <Text style={styles.button}>{children}</Text>
      </Pressable>
    </View>
  );
  //navigation.navigate('BottomTabs');
}

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 8,
    padding: 12,
    backgroundColor: '#640233',
  },
  button: {
    color: 'white',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 16,
    height: 20,
    textAlign: 'center',
    fontFamily: 'cormorantgaramond_bold',
  },
});
export default PrimaryButton;
