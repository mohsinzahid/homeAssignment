import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {RecipeCard} from '../Cards/RecipeCard';
import {HP, WP} from '../../services/responsive';
import {useSelector} from 'react-redux';
import {RECIPEDETAIL} from '../../navigation/ScreensName';

export const RecipesGrid = ({navigation, recipes}) => {
  const {data} = useSelector(state => state);
  return (
    <ScrollView
      contentContainerStyle={styles.scrollView}
      showsVerticalScrollIndicator={false}>
      <View style={styles.recipesContainer}>
        {recipes.map(item => {
          return (
            <RecipeCard
              key={item}
              onPress={() =>
                navigation.navigate(RECIPEDETAIL, {
                  detail: data?.recipes[item],
                })
              }
              title={data?.recipes[item].title}
              category={data?.recipes[item].categoryName}
              imgSource={data?.recipes[item].photo_url}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    paddingVertical: HP(3),
  },
  recipesContainer: {
    paddingHorizontal: WP(5),
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
