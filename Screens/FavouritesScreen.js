import React from "react";
import { View, Text, StyleSheet } from 'react-native'
import MealList from '../Components/MealList'
import { useSelector } from 'react-redux'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import HeaderButton from '../Components/HeaderButton'

const FavouritesScreen = props => {

  const favMeals = useSelector(state => state.meaals.FavouriteMeals)

  if (favMeals.length === 0 || !favMeals) {
    return <View style={styles.texxt}>
      <Text style={{ color: '#f5f5f5', fontFamily: 'open-sans' }}>No favourite meals added yet!</Text>
    </View>
  }

  return (
    <MealList listData={favMeals} navigation={props.navigation} />
  );
};

FavouritesScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Your Favourites!',
    headerLeft: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item title="Menu" iconName='ios-menu' onPress={() => {
        navData.navigation.toggleDrawer()
      }} />
    </HeaderButtons>)
  }
}

styles = StyleSheet.create({
  texxt: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  }
})


export default FavouritesScreen;
