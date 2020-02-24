export const TOGGLE_FAV = 'TOGGLE_FAV'
export const SET_FILTERS = 'SET_FILTERS'


export const toggleFav = (id) => {
    return { type: TOGGLE_FAV, mealId: id}
}


export const set_filters = filterSettings => {
    return {type: SET_FILTERS, filters: filterSettings}
}