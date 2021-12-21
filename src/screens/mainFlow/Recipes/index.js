import React from 'react';
import {View, Text} from 'react-native';
import styles from '../Home/style';
import {Colors} from '../../../utils';
import {RecipesGrid} from '../../../components';

const Recipes = ({navigation, route}) => {
  const _renderData = () => {
    if (route?.params?.recipes.length === 0) {
      return (
        <View style={styles.centeredText}>
          <Text>No Recipes Found</Text>
        </View>
      );
    } else {
      return (
        <RecipesGrid recipes={route?.params.recipes} navigation={navigation} />
      );
    }
  };

  return <View style={styles.container}>{_renderData()}</View>;
};

export default Recipes;
