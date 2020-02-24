import { MEALS } from '../../Data/dummy-data'
import { TOGGLE_FAV, SET_FILTERS } from '../Actions/favmeals'

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    FavouriteMeals: []
}

const mealsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAV:
            const existingIndex = state.FavouriteMeals.findIndex(meal => meal.id === action.mealId)
            if (existingIndex >= 0) {
                const updatedFavMeals = [...state.FavouriteMeals]
                updatedFavMeals.splice(existingIndex, 1)
                return { ...state, FavouriteMeals: updatedFavMeals }
            }
            else {
                const meal = state.meals.find(meal => meal.id === action.mealId)
                return { ...state, FavouriteMeals: state.FavouriteMeals.concat(meal) }
            }
        case SET_FILTERS:
            const appliedFilters = action.filters
            const updatedFilteredMeals = state.meals.filter(meal => {
                if (appliedFilters.SugarFree && !meal.isSugarFree) {
                    return false
                }
                if (appliedFilters.Veg && !meal.isVeg) {
                    return false
                }
                if (appliedFilters.nonVeg && !meal.isNonVeg) {
                    return false
                }
                return true
            })
            return { ...state, filteredMeals: updatedFilteredMeals }
        default:
            return state
    }
}

export default mealsReducer