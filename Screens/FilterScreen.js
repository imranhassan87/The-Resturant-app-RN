import React, { useState, useEffect, useCallback } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import {useDispatch} from 'react-redux'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../Components/HeaderButton'
import Color from "../Constants/Color";
import {set_filters} from '../Store/Actions/favmeals'


const FilterSwitch = props => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch value={props.val}
        trackColor={{ true: Color.primary }}
        thumbColor={Color.primary}
        onValueChange={props.onChange} />
    </View>
  )
}

const FilterScreen = props => {
  const { navigation } = props

  const [isSugarFree, setIsSugarFree] = useState(false)
  const [isVagen, setIsVegan] = useState(false)
  const [isNonVegan, setIsNonVegan] = useState(false)

  const dispatch = useDispatch()

  const saveFilters = useCallback(() => {
    const AppliedFiltered = {
      SugarFree : isSugarFree,
      Veg : isVagen,
      nonVeg : isNonVegan
    }
    dispatch(set_filters(AppliedFiltered))
  }, [isSugarFree,isVagen,isNonVegan,dispatch])

  useEffect( () => {
   navigation.setParams({
      save: saveFilters
    })
  },[saveFilters])

  return (
    <View style={styles.screen}>
      <Text style={styles.title} >Available Filters</Text>
      <FilterSwitch val={isSugarFree} label="Sugar-Free" onChange={newValue => setIsSugarFree(newValue)} />
      <FilterSwitch val={isVagen} label="Vegetarian" onChange={newValue => setIsVegan(newValue)} />
      <FilterSwitch val={isNonVegan} label="Non-Vegan" onChange={newValue => setIsNonVegan(newValue)} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'center',
    margin: 20

  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginVertical: 15
  }
});

FilterScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Filter Meals',
    headerLeft: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item title="Menu" iconName='ios-menu' onPress={() => { navData.navigation.toggleDrawer() }} />
    </HeaderButtons>),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="Save" iconName='ios-save' onPress={navData.navigation.getParam('save')} />
      </HeaderButtons>
    )

  }
}

export default FilterScreen;
