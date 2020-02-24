import React from "react";
import { View, StyleSheet, Text } from 'react-native'
import { useSelector } from 'react-redux'
import { CATEGORIES } from "../Data/dummy-data";
import MealList from "../Components/MealList";

const CategoriesMealScreen = props => {

  const catId = props.navigation.getParam("CategoryId");

  const availableMeals = useSelector(state => state.meaals.filteredMeals)

  const displayedMeals = availableMeals.filter(meal => meal.categoaryIds.indexOf(catId) >= 0)

  if (displayedMeals.length === 0) {
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
      <Text style={{ color: '#f5f5f5', fontFamily: 'open-sans' }}>No meals found, maybe Check your filters?</Text>
    </View>
  }

  return (
    <MealList listData={displayedMeals} navigation={props.navigation} />
  );
};

//navigationOptions are a static option but they can be a fuction if u want them to work dynamically

CategoriesMealScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam("CategoryId");

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return {
    headerTitle: selectedCategory.title
  };
};

export default CategoriesMealScreen;
