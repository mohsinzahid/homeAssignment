import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/mainFlow/Home';
import Categories from '../screens/mainFlow/Categories';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Recipes from '../screens/mainFlow/Recipes';
import {
  RECIPESCREEN,
  HOME,
  CATEGORIES,
  MAIN,
  RECIPEDETAIL,
  RECIPESTACK,
} from './ScreensName';
import RecipeDetail from '../screens/mainFlow/RecipeDetail';

const Tab = createMaterialTopTabNavigator();

const Stack = createStackNavigator();

const MainTabBar = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={HOME} component={Home} />
      <Tab.Screen
        name={CATEGORIES}
        options={{headerShown: false}}
        component={Categories}
      />
    </Tab.Navigator>
  );
};

const MainAppNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={MAIN}
          component={MainTabBar}
          options={{headerShown: false}}
        />
        <Stack.Screen name={RECIPESCREEN} component={Recipes} />
        <Stack.Screen
          name={RECIPEDETAIL}
          component={RecipeDetail}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainAppNav;
