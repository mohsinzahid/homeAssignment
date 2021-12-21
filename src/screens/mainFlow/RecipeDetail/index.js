import React from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import styles from './style';
import ImageSlider from 'react-native-image-slider';
import clock from '../../../assets/icons/icons8-timer-50.png';

const RecipeDetail = ({navigation, route}) => {
  const BackButton = () => {
    return (
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Text style={styles.backBtnText}>{'<'}</Text>
      </TouchableOpacity>
    );
  };

  const ImageSwipper = () => {
    return (
      <View style={styles.wrapper}>
        <BackButton />
        <ImageSlider images={route?.params?.detail?.photosArray} />
      </View>
    );
  };

  const IngredientButton = () => {
    return (
      <TouchableOpacity style={styles.ingredientBtn}>
        <Text>View Ingredients</Text>
      </TouchableOpacity>
    );
  };

  const _renderBody = () => {
    return (
      <ScrollView>
        <ImageSwipper />
        <View style={styles.detailContainer}>
          <Text style={styles.title}>{route?.params?.detail?.title}</Text>
          <Text style={styles.categoryName}>
            {route?.params?.detail?.categoryName}
          </Text>
          <View style={styles.timeContainer}>
            <Image source={clock} style={styles.clock} />
            <Text style={styles.time}>
              {route?.params?.detail?.time} minutes
            </Text>
          </View>
          <IngredientButton />
          <Text style={styles.description}>
            {route?.params?.detail?.description}
          </Text>
        </View>
      </ScrollView>
    );
  };

  return <View style={styles.container}>{_renderBody()}</View>;
};

export default RecipeDetail;
