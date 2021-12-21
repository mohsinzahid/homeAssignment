import React from 'react';
import {TouchableOpacity, Image, StyleSheet, Text, View} from 'react-native';
import {HP, WP} from '../../services/responsive';
import {Colors} from '../../utils';

export const RecipeCard = ({imgSource, onPress, title, category}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.recipeContainer}>
      <View style={styles.imgContainer}>
        <Image source={{uri: imgSource}} style={styles.img} />
      </View>
      <Text>{title}</Text>
      <Text style={styles.categoryText}>{category}</Text>
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
  recipeContainer: {
    backgroundColor: Colors.background,
    marginBottom: HP(5),
    alignItems: 'center',
    overflow: 'hidden',
    height: HP(25),
    width: WP(40),
    borderWidth: 0.4,
    borderRadius: WP(5),
  },
  categoryText: {
    marginTop: '15%',
    fontWeight: 'bold',
  },
});
