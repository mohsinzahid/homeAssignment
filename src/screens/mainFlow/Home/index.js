import React, {useEffect, useState} from 'react';
import {View, Text, ActivityIndicator, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getRecipes} from '../../../redux/actions';
import styles from './style';
import {Colors} from '../../../utils';
import {RecipesGrid} from '../../../components';

const Home = ({navigation}) => {
  const {data} = useSelector(state => state);
  const dispatch = useDispatch();

  const handleGetRecipes = () => {
    dispatch(getRecipes());
  };

  useEffect(() => {
    if (Object.keys(data?.recipes).length === 0) {
      handleGetRecipes();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const _renderData = () => {
    if (data?.isLoading) {
      return (
        <View style={styles.centeredText}>
          <ActivityIndicator color={Colors.primary} />
        </View>
      );
    } else if (Object.keys(data?.recipes).length === 0) {
      return (
        <View style={styles.centeredText}>
          <Text>No Recipes Found</Text>
        </View>
      );
    } else {
      return (
        <RecipesGrid
          recipes={Object.keys(data?.recipes)}
          navigation={navigation}
        />
      );
    }
  };

  return <View style={styles.container}>{_renderData()}</View>;
};

export default Home;
