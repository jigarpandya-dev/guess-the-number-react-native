import React, {useState} from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';

import TodoTextInput from '../../components/TodoTextInput';

const Home = () => {
  const [items, setItems] = useState([]);

  const AddItemHandler = item => {
    setItems([...items, item]);
  };

  const renderItem = ({item}) => (
    <Text
      style={styles.listItem}
      onPress={() => {
        setItems(items.filter(currentItem => currentItem != item));
      }}>
      {item}
    </Text>
  );

  return (
    <View style={styles.container}>
      <TodoTextInput addItemHandler={AddItemHandler} />
      <FlatList data={items} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'stretch',
    backgroundColor: 'beige',
  },
  listItem: {
    marginTop: 16,
    textAlign: 'center',
    backgroundColor: 'brown',
    color: 'white',
    fontFamily: 'cormorantgaramond_bold',
    fontSize: 20,
    padding: 8,
    width: '80%',
    alignSelf: 'center',
  },
});

export default Home;
