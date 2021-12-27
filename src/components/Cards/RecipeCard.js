import React from 'react';
import {
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  View,
  Platform,
} from 'react-native';
import {HP, WP} from '../../services/responsive';
import {Colors} from '../../utils';

export const RecipeCard = ({imgSource, onPress, title, category}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.recipeContainer}>
      <View style={styles.imgContainer}>
        <Image source={{uri: imgSource}} style={styles.img} />
      </View>
      <View style={styles.titleContainer}>
        <Text>{title}</Text>
        <Text style={styles.categoryText}>{category}</Text>
      </View>
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
    ...Platform.select({
      android: {
        height: HP(32),
        width: WP(40),
      },
      ios: {
        height: HP(25),
        width: WP(40),
      },
    }),
    borderWidth: 0.4,
    borderRadius: WP(5),
  },
  categoryText: {
    marginTop: '15%',
    fontWeight: 'bold',
  },
  titleContainer: {
    alignItems: 'center',
    // flex: 1,
    height: '30%',
    width: '100%',
  },
});
