import React from 'react'
import {FlatList,View,StyleSheet} from 'react-native'
import MealItem from './MealItem'
import { MEALS } from '../Data/dummy-data'
import {useSelector} from 'react-redux'


const MealList  = props => {

  const favourtieMeals = useSelector(state => state.meaals.FavouriteMeals)

    const renderMealItem = itemData => {
      const isFavourite = favourtieMeals.some(meal => meal.id === itemData.item.id)
        return(
        <MealItem title={itemData.item.title}
        image={itemData.item.imgUrl} 
        duration={itemData.item.duration} 
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onSelectMeal={()=>{
          props.navigation.navigate({routeName:"MealDetail",params:{
            mealId:itemData.item.id,
            mealTitle: itemData.item.title,
            isFav: isFavourite
          }})
        }}/>
        )}

    return(
        <View style={styles.listed}>
        <FlatList data={props.listData}
        keyExtractor={(item,index) => item.id}
        renderItem={renderMealItem}
        style={styles.flatStyle} />
        </View>
    )
}

styles = StyleSheet.create({
    listed: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:'black',
      },
      flatStyle:{
        width:'100%',
        paddingVertical:8,
        paddingHorizontal:20,

      }
})

export default MealList