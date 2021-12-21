import React from 'react';
import {View, Text, ActivityIndicator, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import styles from './style';
import {Colors} from '../../../utils';
import {CategoryCard} from '../../../components';
import {RECIPESCREEN} from '../../../navigation/ScreensName';

const Categories = ({navigation}) => {
  const {data} = useSelector(state => state);
  console.log('cat', data.categories);

  const _renderData = () => {
    if (data?.isLoading) {
      return (
        <View style={styles.centeredText}>
          <ActivityIndicator color={Colors.primary} />
        </View>
      );
    } else if (Object.keys(data?.categories).length === 0) {
      return (
        <View style={styles.centeredText}>
          <Text>No Recipes Found</Text>
        </View>
      );
    } else {
      return (
        <ScrollView
          contentContainerStyle={styles.scrollView}
          showsVerticalScrollIndicator={false}>
          {Object.keys(data?.categories).map((item, index) => {
            return (
              <CategoryCard
                key={item}
                onPress={() =>
                  navigation.navigate(RECIPESCREEN, {
                    recipes: data?.categories[item]?.recipes,
                  })
                }
                title={data?.categories[item].name}
                imgSource={data?.categories[item].photo_url}
                recipes={data?.categories[item].recipes}
              />
            );
          })}
        </ScrollView>
      );
    }
  };
  return <View style={styles.container}>{_renderData()}</View>;
};

export default Categories;
