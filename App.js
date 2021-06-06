import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {SearchBar, Loading, ListItem} from './src/components';
import {useFetchPlaces} from './src/hooks';

const App = () => {
  const [inputText, setInputText] = React.useState('');
  const {data: places, loading} = useFetchPlaces(inputText);

  const updateSearch = search => setInputText(search);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <SearchBar value={inputText} onChangeText={updateSearch} />
      {loading && inputText !== '' ? (
        <Loading message="Buscando ..." />
      ) : (
        <View styles={styles.listContainer}>
          {places.map((place, i) => (
            <ListItem
              key={i}
              index={i}
              length={places.length}
              title={place.structured_formatting.main_text}
              text={place.structured_formatting.secondary_text}
            />
          ))}
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: '#fff',
    flex: 1,
  },
});

export default App;
