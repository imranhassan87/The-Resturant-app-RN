import React, { useEffect, useCallback } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { useSelector, useDispatch } from 'react-redux'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import { toggleFav } from '../Store/Actions/favmeals'
import HeaderButton from '../Components/HeaderButton'


const MealDetailScreen = props => {

  const availableMeals = useSelector(state => state.meaals.meals)

  const mealId = props.navigation.getParam('mealId')

  const currentMealIsFavourite = useSelector(state => state.meaals.FavouriteMeals.some(meal => meal.id === mealId))

  const selectedMeal = availableMeals.find(meal => meal.id === mealId)

  const dispatch = useDispatch()

  const toggleFavHandler = useCallback(() => {
    dispatch(toggleFav(mealId))
  }, [dispatch, mealId])

  useEffect(() => {
    props.navigation.setParams({ toggleF: toggleFavHandler })
  }, [toggleFavHandler])

  useEffect(() => {
    props.navigation.setParams({ isFav: currentMealIsFavourite })
  }, [currentMealIsFavourite])

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imgUrl }} style={styles.imgStyle} />
      <View style={styles.detail}>
        <Text>{selectedMeal.duration}min</Text>
        <Text>{selectedMeal.complexity.toUpperCase()}</Text>
        <Text>{selectedMeal.affordability.toUpperCase()}</Text>
      </View>
      <Text style={styles.textTitle}>Ingrediants</Text>


      {selectedMeal.ingrediants.map(ingrediant => <Text style={styles.listItem} key={ingrediant}>{ingrediant}</Text>)}
      <Text style={styles.textTitle}>Steps</Text>


      {selectedMeal.steps.map(step => <Text style={styles.listItem} key={step}>{step}</Text>)}
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = navigationData => {
  //const mealId = navigationData.navigation.getParam('mealId')
  const mealTitle = navigationData.navigation.getParam('mealTitle')
  const toggleFavourite = navigationData.navigation.getParam('toggleF')
  const isFavourite = navigationData.navigation.getParam('isFav')
  //const selectedMeal = availableMeals.find(meal => meal.id === mealId)
  return {
    headerTitle: mealTitle,
    headerRight: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item title="fav" iconName={isFavourite ? 'ios-star' : 'ios-star-outline'} onPress={toggleFavourite} />
    </HeaderButtons>

    )
  }
}

const styles = StyleSheet.create({

  detail: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around'
  },

  textTitle: {
    fontFamily: 'open-sans-bold',
    textAlign: 'center',
    fontSize: 22
  },

  imgStyle: {
    width: '100%',
    height: 200
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,

  }

});

export default MealDetailScreen;



//onPress={() => {props.navigation.popToTop() pop all the screens and go to the top most screen