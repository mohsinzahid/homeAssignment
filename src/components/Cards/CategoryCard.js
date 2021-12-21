import React from 'react';
import {TouchableOpacity, Image, StyleSheet, Text, View} from 'react-native';
import {HP, WP} from '../../services/responsive';
import {Colors} from '../../utils';

export const CategoryCard = ({imgSource, onPress, title, recipes}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.categoryContainer}>
      <View style={styles.imgContainer}>
        <Image source={{uri: imgSource}} style={styles.img} />
      </View>
      <Text style={styles.categoryText}>{title}</Text>
      <Text>{recipes.length} recipes</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imgContainer: {
    height: '70%',
    width: '100%',
  },
  img: {
    height: '100%',
    width: '100%',
  },
  categoryContainer: {
    backgroundColor: Colors.background,
    marginBottom: HP(5),
    alignItems: 'center',
    overflow: 'hidden',
    height: HP(25),
    width: '100%',
    borderWidth: 0.4,
    borderRadius: WP(5),
  },
  categoryText: {
    marginTop: '5%',
    fontWeight: 'bold',
  },
});
