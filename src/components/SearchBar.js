import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Dimensions,
} from 'react-native';
import {SearchBar, Icon} from 'react-native-elements';

const SearchBarComponent = ({value, onChangeText}) => (
  <View style={styles.container}>
    <SearchBar
      placeholder="Ingrese la ubicación"
      onChangeText={onChangeText}
      value={value}
      lightTheme
      inputContainerStyle={styles.searchInputContainer}
      containerStyle={styles.searchContainer}
      inputStyle={styles.searchInputStyle}
      searchIcon={<Icon name="map-pin" type="feather" size={25} />}
      leftIconContainerStyle={styles.searchLeftIcon}
      clearIcon={
        <Icon
          name="times-circle"
          type="font-awesome"
          size={23}
          onPress={() => {
            onChangeText('');
          }}
        />
      }
    />
    <TouchableOpacity style={styles.cancelBtnContainer}>
      <Text style={styles.cancelBtn}>Cancelar</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9f9f7',
    flexDirection: 'row',
    paddingBottom: 20,
    paddingLeft: 5,
    paddingTop: 10,
    paddingRight: 5,
  },
  searchContainer: {
    backgroundColor: '#f9f9f7',
    borderBottomColor: '#f9f9f7',
    borderTopColor: '#f9f9f7',
  },
  searchLeftIcon: {marginLeft: 20},
  searchInputContainer: {
    backgroundColor: '#fff',
    borderRadius: 18,
    elevation: 5,
    height: 55,
    width: Dimensions.get('screen').width * 0.68,
  },
  searchInputStyle: {
    fontFamily: 'PublicaSans-Light',
    fontSize: 17,
  },
  cancelBtnContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('screen').width * 0.27,
  },
  cancelBtn: {
    color: '#ed5f3d',
    fontFamily: 'PublicaSans-Medium',
    fontSize: 17,
  },
});

export default SearchBarComponent;
