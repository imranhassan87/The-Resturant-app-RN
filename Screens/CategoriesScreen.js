import React from "react";
import { FlatList } from "react-native";
import { CATEGORIES } from "../Data/dummy-data";
import CategoryGridTiles from '../Components/CategoryGridTiles'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../Components/HeaderButton'



const CategoriesScreen = props => {

  const renderGridItem = itemData => {
    return (
      <CategoryGridTiles title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'CategoryMeals', params: {
              CategoryId: itemData.item.id,
              CategoryColor: itemData.item.color
            }
          })
        }} />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item, index) => item.id}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

//for the header title of the screen... check the docs for the properties
CategoriesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Meal Categories',
    headerLeft: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item title="Menu" iconName='ios-menu' onPress={() => { navData.navigation.toggleDrawer() }} />
    </HeaderButtons>)
  }

}

export default CategoriesScreen;

{
  /* <Button title="Next Screen" onPress={() => {
    props.navigation.navigate({routeName:'CategoryMeals'})
    //props.navigation.push('Categoary') push works same as navigate but it can also navigate the same screen again and again..
    //just in case you're working with folders in the same screen from going one folder to another on same screen u might wanna use push
    // use replace() in log in screens coz user wont be able to use back button to go back to the log in page after logged in, stack would be empty using replace
}}/> */
}

// pop() and goBack() is used for going back to the previous screens
