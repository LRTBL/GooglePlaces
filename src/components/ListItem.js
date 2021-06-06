import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Divider} from 'react-native-elements';

const ListItem = ({index, length, title, text}) => (
  <TouchableOpacity style={styles.listItemContainer}>
    <View style={styles.listItemContentContainer}>
      <Text style={styles.listItemTitle}>{title}</Text>
      <Text style={styles.listItemText}>{text}</Text>
    </View>
    {index + 1 !== length && <Divider />}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  listItemContainer: {marginLeft: 20, marginRight: 20},
  listItemContentContainer: {
    paddingBottom: 30,
    paddingTop: 20,
  },
  listItemTitle: {
    fontFamily: 'PublicaSans-Bold',
    fontSize: 18,
    width: '90%',
  },
  listItemText: {
    fontFamily: 'PublicaSans-Light',
    fontSize: 13,
    marginTop: 5,
  },
});

export default ListItem;
