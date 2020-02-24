import React from 'react'
import { Platform } from 'react-native'
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer'

import CategoriesScreen from "../Screens/CategoriesScreen";
import CategoriesMealScreen from "../Screens/CategoriesMealScreen";
import MealDetailScreen from "../Screens/MealDetailScreen";
import FavouritesScreen from '../Screens/FavouritesScreen'
import FilterScreen from '../Screens/FilterScreen'
import Color from "../Constants/Color";



const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Color.primary : ''
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Color.primary,
  headerTitle: 'A Screen',
  headerTitleStyle: {
    fontSize: 17,
    color: '#f5f5f5',
    fontFamily: 'open-sans-bold',
  }
};


const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen
    },
    CategoryMeals: {
      screen: CategoriesMealScreen
    },
    MealDetail: MealDetailScreen
  },
  {
    // initialRouteName: 'Categories',
    defaultNavigationOptions: defaultStackNavOptions
  }
);

const FavNavigator = createStackNavigator(
  {
    Favorites: FavouritesScreen,
    MealDetail: MealDetailScreen
  },
  {
    // initialRouteName: 'Categories',
    defaultNavigationOptions: defaultStackNavOptions
  }
);

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return (
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Color.primary
    }
  },
  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Color.secondary
    }
  }
};

const MealsFavTabNavigator =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
      activeTintColor: 'white',
      shifting: true,
      barStyle: {
        backgroundColor: Color.primary
      }
    })
    : createBottomTabNavigator(tabScreenConfig, {
      tabBarOptions: {
        activeTintColor: Color.secondary
      }
    });

const FiltersNavigator = createStackNavigator({
  Filters: FilterScreen
},
  {
    // navigationOptions:{
    //   drawerLabel: 'Filtered Meal !!'
    // }, I prefer to set it in drawerNaviagtor
    defaultNavigationOptions: defaultStackNavOptions
  })

const MainNavigator = createDrawerNavigator({
  MealsFav: {
    screen: MealsFavTabNavigator,
    navigationOptions: {
      drawerLabel: 'Meals'
    }
  },
  Filters: {
    screen: FiltersNavigator,
    navigationOptions: {
      drawerLabel: 'Filtered Meal!!'
    }
  }
},
  {
    contentOptions: {
      activeTintColor: Color.secondary,
      labelStyle: {
        fontFamily: 'open-sans-bold'
      }
    }
  })

export default createAppContainer(MainNavigator);
